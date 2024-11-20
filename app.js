// app.js
document.addEventListener('DOMContentLoaded', function() {
    // Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Render Attractions (only on index page)
    const attractionsGrid = document.getElementById('attractionsGrid');
    if (attractionsGrid) {
        function renderAttractions() {
            attractionsGrid.innerHTML = attractions.map(attraction => `
                <div class="attraction-card">
                    <img src="${attraction.images[0]}" alt="${attraction.name}" class="card-image">
                    <div class="card-content">
                        <h3 class="card-title">${attraction.name}</h3>
                        <p class="card-description">${attraction.description}</p>
                        <button class="card-button" onclick="openModal(${attraction.id})">
                            ข้อมูลเพิ่มเติม
                        </button>
                    </div>
                </div>
            `).join('');
        }

        renderAttractions();

        // Modal Functionality
        const modal = document.getElementById('attractionModal');
        const modalImage = document.getElementById('modalImage');
        const closeButton = document.querySelector('.close-button');
        const prevButton = document.querySelector('.carousel-button.prev');
        const nextButton = document.querySelector('.carousel-button.next');
        let currentAttraction = null;
        let currentImageIndex = 0;

        window.openModal = function(attractionId) {
            currentAttraction = attractions.find(a => a.id === attractionId);
            currentImageIndex = 0;
            updateModal();
            modal.classList.add('active');
        };

        function updateModal() {
            if (!currentAttraction) return;

            modalImage.src = currentAttraction.images[currentImageIndex];
            modalImage.alt = currentAttraction.name;

            const modalInfo = document.querySelector('.modal-info');
            modalInfo.innerHTML = `
                <h2 class="info-title">${currentAttraction.name}</h2>
                <p class="info-description">${currentAttraction.description}</p>
                <div class="info-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${currentAttraction.address}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-clock"></i>
                    <span>${currentAttraction.hours}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-phone"></i>
                    <span>${currentAttraction.phone}</span>
                </div>
                <div class="info-item">
                    <i class="fas fa-location-arrow"></i>
                    <span id="distance">กำลังคำนวณระยะทาง...</span>
                </div>
            `;

            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    const distance = calculateDistance(
                        position.coords.latitude,
                        position.coords.longitude,
                        currentAttraction.coords.lat,
                        currentAttraction.coords.lon
                    );
                    document.getElementById('distance').textContent = 
                        `ระยะห่างจากตำแหน่งปัจจุบัน: ${distance.toFixed(2)} กิโลเมตร`;
                });
            }
        }

        function calculateDistance(lat1, lon1, lat2, lon2) {
            const R = 6371;
            const dLat = toRad(lat2 - lat1);
            const dLon = toRad(lon2 - lon1);
            const a = Math.sin(dLat/2) * Math.sin(dLat/2) +
                     Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * 
                     Math.sin(dLon/2) * Math.sin(dLon/2);
            const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            return R * c;
        }

        function toRad(deg) {
            return deg * (Math.PI/180);
        }

        // Event Listeners
        closeButton?.addEventListener('click', () => {
            modal.classList.remove('active');
        });

        modal?.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        prevButton?.addEventListener('click', () => {
            if (!currentAttraction) return;
            currentImageIndex = (currentImageIndex - 1 + currentAttraction.images.length) % currentAttraction.images.length;
            modalImage.src = currentAttraction.images[currentImageIndex];
        });

        nextButton?.addEventListener('click', () => {
            if (!currentAttraction) return;
            currentImageIndex = (currentImageIndex + 1) % currentAttraction.images.length;
            modalImage.src = currentAttraction.images[currentImageIndex];
        });
    }
});