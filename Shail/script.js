const collegeCoords = [21.2120, 81.3733];

// Dynamic Terminal Clock
function updateClock() {
    const now = new Date();
    const timeStr = now.getHours().toString().padStart(2,'0') + ":" +
                    now.getMinutes().toString().padStart(2,'0') + ":" +
                    now.getSeconds().toString().padStart(2,'0');
    document.getElementById('liveTime').innerText = timeStr;
}
setInterval(updateClock, 1000);
updateClock();

const database = {
    inCampus: [
        { id: 1, title: "Block A", category: "Academic", image: "assets/images/A-Block.webp", rating: 4.8, distance: "Primary Entrance Zone", description: "The administrative powerhouse of Rungta. Houses the Student Section (FA-01), Admission Cell, and the Examination Section (FA-09). Most freshman engineering classes are conducted here in high-tech smart rooms.", tags: ["Admin", "1st Year", "Smart Class"], coords: [21.234850, 81.345732] },

        { id: 2, title: "Block B", category: "Academic", image: "assets/images/B_Block.webp", rating: 4.6, distance: "Central Square", description: "The cultural hub. Contains the main Auditorium and the 'Rubi' Entrepreneurship cell where students innovate and develop real-world products.", tags: ["Startup", "Auditorium", "Rubi Hub"], coords: [21.234850, 81.345732] },

        { id: 3, title: "Block C", category: "Academic", image: "assets/images/C block.webp", rating: 4.5, distance: "North Sector", description: "Dedicated to senior students, Study Management, and core Science disciplines. Advanced labs and peaceful study zones.", tags: ["Management", "Labs", "Seniors"], coords: [21.234850, 81.345732] },

        { id: 4, title: "Pharmacy Block", category: "Academic", image: "assets/images/Pharmacy_Block.webp", rating: 4.7, distance: "East Side", description: "Specialized building for Pharmaceutical Sciences. Modern chemistry labs and medical research infrastructure.", tags: ["Pharmacy", "Medical", "Labs"], coords: [21.234850, 81.345732] },

        { id: 5, title: "Auditorium", category: "Academic", image: "assets/images/Auditorium.webp", rating: 4.7, distance: "Block B - Ground Floor", description: "For Important Meeting and Conference. Silient Zone", tags: ["Meeting", "Conference"], coords: [21.234850, 81.345732] },

        { id: 6, title: "Chai Adda", category: "Food", image: "assets/images/Chai_Ka_Adda.webp", rating: 4.9, distance: "Between Block A & B", description: "The soul of the campus. Famous for ginger tea, cold coffee, and the legendary instant Maggi sessions.", tags: ["Tea", "Hangout", "Maggi"], coords: [21.234850, 81.345732] },

        { id: 6, title: "Canteen", category: "Food", image: "assets/images/Canteen.webp", rating: 4.3, distance: "West Zone", description: "Extensive menu featuring South Indian snacks, diverse appetizers, and cold drinks. Great for group meals.", tags: ["Dosa", "Snacks", "Lunch"], coords: [21.234850, 81.345732] },

        { id: 7, title: "Juicy Corner", category: "Food", image: "assets/images/Juice Corner.webp", rating: 4.7, distance: "Front of Mess", description: "Health-focused spot serving fresh seasonal fruit juices and protein-rich fruit salads.", tags: ["Fresh Juice", "Healthy", "Salads"], coords: [21.234850, 81.345732] },

        { id: 8, title: "Main Mess", category: "Food", image: "assets/images/Main_Mess.webp", rating: 4.1, distance: "Hostel Entry", description: "Large-scale dining hall serving Thali meals for hostellers and day scholars alike.", tags: ["Thali", "Daily Meals", "Veg"], coords: [21.234850, 81.345732] },

        { id: 9, title: "Divine Stationery", category: "Utility", image: "assets/images/Divine Stationery .webp", rating: 4.5, distance: "Block B Entry", description: "Complete store for stationery, personal care items, snacks, and high-speed photocopying/printing.", tags: ["Photocopy", "Books", "Supplies"], coords: [21.234850, 81.345732] },

        { id: 10, title: "Student Parking", category: "Parking", image: "assets/images/Student Parking.jpeg", rating: 4.0, distance: "Gate 1", description: "Dedicated secure area for student 2-wheelers. Staff sections also included.", tags: ["Two-Wheeler", "Staff"], coords: [21.234850, 81.345732] },

        { id: 11, title: "Teacher Parking", category: "Parking", image: "assets/images/Teacher Parking.jpeg", rating: 4.2, distance: "Admin Rear", description: "Exclusive parking for faculty members' two-wheelers and four-wheelers.", tags: ["Car Parking", "Faculty"], coords: [21.234850, 81.345732] },

        { id: 12, title: "Sports Complex", category: "Sports", image: "assets/images/Sports_Complex.webp", rating: 4.8, distance: "North End", description: "Includes the main athletic field and professional basketball court.", tags: ["Basketball", "Cricket", "Training"], coords: [21.234850, 81.345732] },

        { id: 13, title: "Student Section", category: "Academic", image: "assets/images/Student Section.jpeg", rating: 4.8, distance: "Block 'A' FA-01", description: "For Academic Help And Documentation.", tags: ["Help", "Query", "Guildance"], coords: [21.234850, 81.345732] },

        { id: 14, title: "Examination Section", category: "Academic", image: "assets/images/Exam_Controler_Room.webp", rating: 4.8, distance: "Block 'A' GA-09", description: "For Examination Help And Evalution.", tags: ["Exam"], coords: [21.234850, 81.345732] },

        { id: 15, title: "Rubi And TN&P", category: "Academic", image: "assets/images/Rubi_Club.webp", rating: 4.8, distance: "Block B SB-02", description: "Includes the main athletic field and professional basketball court.", tags: ["Basketball", "Cricket", "Training"], coords: [21.234850, 81.345732] },

        { id: 16, title: "Front Office", category: "Academic", image: "assets/images/Front Office.jpeg", rating: 4.8, distance: "Block B SB-02", description: "Help Desk For Students And Visitors.", tags: ["Help", "Query"], coords: [21.234850, 81.345732] },

        { id: 17, title: "Account Section", category: "Fee", image: "assets/images/Account_Department.webp", rating: 4.8, distance: "Block A 'Ground floor' ", description: "For Fee Related Works and Payments", tags: ["Fee", "Payment", "Accounts"], coords: [21.234850, 81.345732] },


    ],
    outCampus: [
        { id: 18, title: "Surya TI Mall", category: "Shopping", image: "assets/images/Surya_Mall.webp", rating: 4.6, distance: "5.2 km", description: "The ultimate weekend spot for movies, food court dining, and global brands.", tags: ["Mall", "Movies", "Food"], coords: [21.218720, 81.322654] },

        { id: 19, title: "Care Hospital", category: "Emergency", image: "assets/images/Care-Hospital (1).webp", rating: 4.4, distance: "2.0 km", description: "High-tier medical facility available 24/7 for student health emergencies.", tags: ["24/7", "Medical", "ER"], coords: [21.224427, 81.343876] },

        { id: 20, title: "Red Chilli", category: "Food", image: "assets/images/Red_Chilli_Hotel.webp", rating: 4.5, distance: "2.1 km", description: "Local favorite for late-night meals. Serves authentic Non-veg food.", tags: ["Late Night", "Low Budget"], coords: [21.223656, 81.343818] },

        { id: 21, title: "Boys PG", category: "Living", image: "assets/images/Boys PG.webp", rating: 4.2, distance: "1.5 km", description: "Secure housing for male students with WiFi and laundry.", tags: ["Stay", "Budget"], coords: [21.225445, 81.345433] },

        { id: 22, title: "Girls PG", category: "Living", image: "assets/images/Girls_PG.webp", rating: 4.4, distance: "2.3 km", description: "High-security PG for female students with strictly controlled entry.", tags: ["Girls Only", "Stay"], coords: [21.226537, 81.339756] },

        { id: 23, title: "Petrol Pump", category: "Fuel", image: "assets/images/PetrolPump.webp", rating: 4.4, distance: "400 m", description: "For Fuel Filling in Vehicles", tags: ["fuel"], coords: [21.235601, 81.350758] },

        { id: 24, title: "Hotel Bellfare", category: "Living", image: "assets/images/Bellfair.webp", rating: 4.4, distance: "700 m", description: "For Staying In Emergency For Few Days", tags: ["Staying"], coords: [21.230558,81.349017] },

        { id: 25, title: "Medical Plus", category: "Emergency", image: "assets/images/MedPlus_Medical.webp", rating: 4.4, distance: "2.4 km", description: "For Medicine in Emergency in Fever, Headache Etc..", tags: ["Medicine"], coords: [21.220610,81.344096] },

        { id: 26, title: "Salon", category: "Utility", image: "assets/images/Galaxy_Salon.webp", rating: 4.4, distance: "4.2 km", description: "For Shaving, Haircutting And Maintenance", tags: ["Hair-Cutting", "Shaving"], coords: [21.219489,81.322747] },

        { id: 27, title: "Alpha Biryani", category: "Food", image: "assets/images/Alpha biryani .webp", rating: 4.4, distance: "3.9 km", description: "For Birthday Celebration, Biryani, Non- Veh and Veg Food", tags: ["Food", "Celebrating"], coords: [21.218279,81.334929] },

        { id: 28, title: "Durg Station", category: "Station", image: "assets/images/durg station .webp", rating: 4.4, distance: "10.3 km", description: "For Travelling in train, Booking Ticket Offline", tags: ["Station"], coords: [21.199750,81.291551] },
    ]
};

let currentTab = 'inCampus';
let currentFilter = 'All';
let isMapView = false;
let mapInstance = null;
let markers = [];

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOMContentLoaded fired');
    renderFilters();
    renderItems();
});

function switchTab(tabName) {
    currentTab = tabName;
    currentFilter = 'All';
    const btnIn = document.getElementById('tab-inCampus');
    const btnOut = document.getElementById('tab-outCampus');

    if(tabName === 'inCampus') {
        btnIn.className = "px-10 py-4 rounded-[1.5rem] font-black text-[11px] tracking-[0.2em] transition-all text-white bg-blue-600 shadow-xl shadow-blue-600/30";
        btnOut.className = "px-10 py-4 rounded-[1.5rem] font-black text-[11px] tracking-[0.2em] transition-all text-slate-400 hover:text-slate-200";
    } else {
        btnOut.className = "px-10 py-4 rounded-[1.5rem] font-black text-[11px] tracking-[0.2em] transition-all text-white bg-blue-600 shadow-xl shadow-blue-600/30";
        btnIn.className = "px-10 py-4 rounded-[1.5rem] font-black text-[11px] tracking-[0.2em] transition-all text-slate-400 hover:text-slate-200";
    }

    renderFilters(); renderItems();
    if (isMapView) updateMapMarkers();
}

function toggleView() {
    isMapView = !isMapView;
    const mapC = document.getElementById('mapViewContainer');

    if (isMapView) {
        mapC.classList.remove('translate-x-full');
        if (!mapInstance) setTimeout(initMap, 100); else updateMapMarkers();
    } else {
        mapC.classList.add('translate-x-full');
    }
}

function getCategories() {
    const items = database[currentTab];
    return ['All', ...Array.from(new Set(items.map(i => i.category)))];
}

function renderFilters() {
    const container = document.getElementById('filterContainer');
    container.innerHTML = getCategories().map(cat => `
        <button onclick="setFilter('${cat}')" class="px-10 py-5 rounded-[1.5rem] text-[10px] font-black tracking-widest transition-all border shrink-0 ${
            currentFilter === cat ? 'bg-blue-600 text-white border-blue-600 shadow-2xl' : 'bg-white/5 text-slate-400 border-white/5 hover:bg-white/10'
        }">${cat.toUpperCase()}</button>
    `).join('');
}

function setFilter(category) {
    currentFilter = category;
    renderFilters(); renderItems();
    if(isMapView) updateMapMarkers();
}

function renderItems() {
    const grid = document.getElementById('resultsGrid');
    const search = document.getElementById('searchInput').value.toLowerCase();
    const filtered = database[currentTab].filter(i =>
        (currentFilter === 'All' || i.category === currentFilter) &&
        (i.title.toLowerCase().includes(search) || i.description.toLowerCase().includes(search))
    );

    document.getElementById('emptyState').classList.toggle('hidden', filtered.length > 0);
    grid.innerHTML = filtered.map((item, idx) => `
        <div onclick="openModal(${item.id})" class="animate-fade-up glass-card rounded-[3.5rem] p-8 transition-all group cursor-pointer" style="animation-delay: ${idx * 0.05}s">
            <div class="w-full h-72 rounded-[3rem] overflow-hidden relative shadow-2xl mb-10">
                <img src="${item.image}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s]" alt="">
                <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                <div class="absolute bottom-8 left-8 flex gap-3">
                        <span class="text-[10px] font-black text-white bg-blue-600/90 backdrop-blur-md px-5 py-2 rounded-full uppercase tracking-widest">${item.category}</span>
                </div>
            </div>
            <div>
                <div class="flex items-center justify-between mb-4">
                    <h3 class="font-black text-white text-3xl group-hover:text-blue-400 transition-colors tracking-tight truncate">${item.title}</h3>
                    <span class="text-[11px] font-black text-emerald-400 flex items-center gap-2 bg-emerald-400/10 px-3 py-2 rounded-xl border border-emerald-400/20"><i class="fa-solid fa-star"></i> ${item.rating}</span>
                </div>
                <p class="text-[13px] text-slate-500 font-bold mb-8 flex items-center tracking-wide"><i class="fa-solid fa-location-arrow mr-3 text-blue-500"></i> ${item.distance}</p>
                <p class="text-slate-400 text-base leading-relaxed line-clamp-2 mb-10 font-medium">${item.description}</p>
                <div class="flex gap-4 overflow-hidden">
                    ${item.tags.slice(0, 3).map(t => `<span class="text-[10px] bg-white/5 text-slate-500 px-4 py-2 rounded-xl border border-white/5 font-black uppercase tracking-widest">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

document.getElementById('searchInput').addEventListener('input', () => { renderItems(); });

function openModal(id) {
    const item = [...database.inCampus, ...database.outCampus].find(i => i.id === id);
    if (!item) return;
    document.getElementById('modalImage').src = item.image;
    document.getElementById('modalCategory').textContent = item.category;
    document.getElementById('modalTitle').textContent = item.title;
    document.getElementById('modalRating').textContent = item.rating;
    document.getElementById('modalDistance').textContent = item.distance;
    document.getElementById('modalDescription').textContent = item.description;
    document.getElementById('modalTags').innerHTML = item.tags.map(t => `<span class="bg-white/5 text-slate-300 px-8 py-4 rounded-3xl text-[12px] font-black border border-white/10 uppercase tracking-[0.2em] shadow-inner">${t}</span>`).join('');
    document.getElementById('modalMapLink').href = `https://www.google.com/maps/dir/?api=1&destination=${item.coords[0]},${item.coords[1]}`;

    const modal = document.getElementById('detailModal');
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        document.getElementById('modalBackdrop').classList.replace('opacity-0', 'opacity-100');
        document.getElementById('modalPanel').classList.remove('translate-y-full');
    });
}

function closeModal() {
    document.getElementById('modalBackdrop').classList.replace('opacity-100', 'opacity-0');
    document.getElementById('modalPanel').classList.add('translate-y-full');
    setTimeout(() => document.getElementById('detailModal').classList.add('hidden'), 500);
}

function initMap() {
    mapInstance = L.map('map', { zoomControl: false }).setView(collegeCoords, 14);
    L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_labels_under/{z}/{x}/{y}{r}.png').addTo(mapInstance);
    updateMapMarkers();
}

function updateMapMarkers() {
    if (!mapInstance) return;
    markers.forEach(m => mapInstance.removeLayer(m)); markers = [];

    const collegeIcon = L.divIcon({ className: 'custom-icon', html: `<div class="w-10 h-10 bg-blue-500 rounded-full border-4 border-white shadow-[0_0_40px_rgba(59,130,246,0.8)] animate-pulse"></div>`, iconSize: [40, 40] });
    markers.push(L.marker(collegeCoords, {icon: collegeIcon}).addTo(mapInstance));

    if (currentTab === 'outCampus') mapInstance.flyTo(collegeCoords, 14);
    else mapInstance.flyTo(collegeCoords, 17);

    const search = document.getElementById('searchInput').value.toLowerCase();
    const filtered = database[currentTab].filter(i => (currentFilter === 'All' || i.category === currentFilter) && i.title.toLowerCase().includes(search));

    filtered.forEach(item => {
        const icon = L.divIcon({
            className: 'custom-icon',
            html: `<div class="custom-marker"><i class="fa-solid fa-location-dot"></i></div>`,
            iconSize: [34, 34], iconAnchor: [17, 34]
        });
        markers.push(L.marker(item.coords, { icon: icon }).addTo(mapInstance).on('click', () => openModal(item.id)));
    });
}

// Modal functions for locality submission and feedback
function openSubmitLocalityModal() {
    const modal = document.getElementById('submitLocalityModal');
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        document.getElementById('submitLocalityBackdrop').classList.replace('opacity-0', 'opacity-100');
        document.getElementById('submitLocalityPanel').classList.remove('translate-y-full');
    });
}

function closeSubmitLocalityModal() {
    document.getElementById('submitLocalityBackdrop').classList.replace('opacity-100', 'opacity-0');
    document.getElementById('submitLocalityPanel').classList.add('translate-y-full');
    setTimeout(() => document.getElementById('submitLocalityModal').classList.add('hidden'), 500);
}

function openFeedbackModal() {
    const modal = document.getElementById('feedbackModal');
    modal.classList.remove('hidden');
    requestAnimationFrame(() => {
        document.getElementById('feedbackBackdrop').classList.replace('opacity-0', 'opacity-100');
        document.getElementById('feedbackPanel').classList.remove('translate-y-full');
    });
}

function closeFeedbackModal() {
    document.getElementById('feedbackBackdrop').classList.replace('opacity-100', 'opacity-0');
    document.getElementById('feedbackPanel').classList.add('translate-y-full');
    setTimeout(() => document.getElementById('feedbackModal').classList.add('hidden'), 500);
}

// Form submission handlers
document.getElementById('localityForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        title: document.getElementById('localityTitle').value,
        category: document.getElementById('localityCategory').value,
        description: document.getElementById('localityDescription').value,
        coords: [
            parseFloat(document.getElementById('localityLat').value),
            parseFloat(document.getElementById('localityLng').value)
        ],
        tags: document.getElementById('localityTags').value.split(',').map(tag => tag.trim()).filter(tag => tag),
        distance: document.getElementById('localityDistance').value
    };

    try {
        const response = await fetch('http://localhost:3001/api/submit-locality', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            alert('Locality submitted successfully! It will be reviewed before being added to Xploify.');
            closeSubmitLocalityModal();
            document.getElementById('localityForm').reset();
        } else {
            alert('Error submitting locality: ' + result.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting locality. Please try again.');
    }
});

document.getElementById('feedbackForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const rating = document.querySelector('input[name="rating"]:checked');
    if (!rating) {
        alert('Please select a rating.');
        return;
    }

    const formData = {
        rating: rating.value,
        comments: document.getElementById('feedbackComments').value
    };

    try {
        const response = await fetch('http://localhost:3001/api/submit-feedback', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();

        if (response.ok) {
            alert('Thank you for your feedback!');
            closeFeedbackModal();
            document.getElementById('feedbackForm').reset();
            // Reset star ratings
            document.querySelectorAll('.star-rating').forEach(star => {
                star.classList.remove('text-yellow-400');
                star.classList.add('text-slate-600');
            });
        } else {
            alert('Error submitting feedback: ' + result.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting feedback. Please try again.');
    }
});

// Star rating functionality
document.querySelectorAll('.star-rating').forEach((star, index) => {
    star.addEventListener('click', () => {
        const rating = index + 1;
        document.getElementById('rating').checked = true;

        document.querySelectorAll('.star-rating').forEach((s, i) => {
            if (i <= index) {
                s.classList.remove('text-slate-600');
                s.classList.add('text-yellow-400');
            } else {
                s.classList.remove('text-yellow-400');
                s.classList.add('text-slate-600');
            }
        });
    });
});
