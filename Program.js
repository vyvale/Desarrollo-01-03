document.addEventListener("DOMContentLoaded", function() {
    var map = L.map('map').setView([4.592292, -74.158408], 16); // Bogotá como ejemplo
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
});


