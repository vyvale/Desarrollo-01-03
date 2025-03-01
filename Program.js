// Crear el mapa centrado en coordenadas específicas
var map = L.map('map').setView([0, 0], 2);

// Agregar capa de OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Cargar el archivo KML de Google Earth Pro
omnivore.kml('mapa.kml').addTo(map);
