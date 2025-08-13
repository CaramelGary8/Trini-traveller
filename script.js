// Initialize the map and set its view to Trinidad
var map = L.map('map').setView([10.5, -61.3], 9); // Trinidad's coordinates

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Example marker (Port of Spain)
L.marker([10.6669, -61.5189])
  .addTo(map)
  .bindPopup('Port of Spain')
  .openPopup();
