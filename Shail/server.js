const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from current directory
app.use(express.static(__dirname));

// Data storage (using JSON files for simplicity)
const submissionsFile = path.join(__dirname, 'submissions.json');
const verifiedDataFile = path.join(__dirname, 'verified_data.json');
const feedbackFile = path.join(__dirname, 'feedback.json');

// Initialize data files if they don't exist
if (!fs.existsSync(submissionsFile)) {
    fs.writeFileSync(submissionsFile, JSON.stringify([]));
}
if (!fs.existsSync(verifiedDataFile)) {
    fs.writeFileSync(verifiedDataFile, JSON.stringify([]));
}
if (!fs.existsSync(feedbackFile)) {
    fs.writeFileSync(feedbackFile, JSON.stringify([]));
}

// Helper functions
function readData(file) {
    return JSON.parse(fs.readFileSync(file, 'utf8'));
}

function writeData(file, data) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2));
}

// Routes

// Submit locality data
app.post('/api/submit-locality', (req, res) => {
    const { title, category, description, tags, coords, image, distance } = req.body;

    if (!title || !category || !description || !coords) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    const submissions = readData(submissionsFile);
    const newSubmission = {
        id: Date.now(),
        title,
        category,
        description,
        tags: tags || [],
        coords,
        image: image || '',
        distance: distance || '',
        submittedAt: new Date().toISOString(),
        status: 'pending'
    };

    submissions.push(newSubmission);
    writeData(submissionsFile, submissions);

    res.json({ message: 'Locality data submitted successfully', id: newSubmission.id });
});

// Get pending submissions for verification
app.get('/api/pending-submissions', (req, res) => {
    const submissions = readData(submissionsFile);
    const pending = submissions.filter(sub => sub.status === 'pending');
    res.json(pending);
});

// Verify and add locality data
app.post('/api/verify-locality/:id', (req, res) => {
    const { id } = req.params;
    const { verified } = req.body;

    const submissions = readData(submissionsFile);
    const submissionIndex = submissions.findIndex(sub => sub.id == id);

    if (submissionIndex === -1) {
        return res.status(404).json({ error: 'Submission not found' });
    }

    if (verified) {
        const verifiedData = readData(verifiedDataFile);
        const verifiedItem = { ...submissions[submissionIndex], status: 'verified' };
        verifiedData.push(verifiedItem);
        writeData(verifiedDataFile, verifiedData);
    }

    submissions[submissionIndex].status = verified ? 'verified' : 'rejected';
    writeData(submissionsFile, submissions);

    res.json({ message: `Submission ${verified ? 'verified' : 'rejected'} successfully` });
});

// Get verified data
app.get('/api/verified-data', (req, res) => {
    const verifiedData = readData(verifiedDataFile);
    res.json(verifiedData);
});

// Submit feedback
app.post('/api/submit-feedback', (req, res) => {
    const { rating, comments, userId } = req.body;

    if (!rating || rating < 1 || rating > 5) {
        return res.status(400).json({ error: 'Invalid rating. Must be between 1 and 5' });
    }

    const feedback = readData(feedbackFile);
    const newFeedback = {
        id: Date.now(),
        rating: parseInt(rating),
        comments: comments || '',
        userId: userId || 'anonymous',
        submittedAt: new Date().toISOString()
    };

    feedback.push(newFeedback);
    writeData(feedbackFile, feedback);

    res.json({ message: 'Feedback submitted successfully', id: newFeedback.id });
});

// Get feedback statistics
app.get('/api/feedback-stats', (req, res) => {
    const feedback = readData(feedbackFile);
    const totalFeedback = feedback.length;
    const averageRating = totalFeedback > 0 ? feedback.reduce((sum, f) => sum + f.rating, 0) / totalFeedback : 0;

    res.json({
        totalFeedback,
        averageRating: Math.round(averageRating * 10) / 10,
        distribution: {
            1: feedback.filter(f => f.rating === 1).length,
            2: feedback.filter(f => f.rating === 2).length,
            3: feedback.filter(f => f.rating === 3).length,
            4: feedback.filter(f => f.rating === 4).length,
            5: feedback.filter(f => f.rating === 5).length
        }
    });
});

app.listen(PORT, () => {
    console.log(`Xploify backend server running on port ${PORT}`);
});
