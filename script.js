// Initialize the map centered on Trinidad
var map = L.map('map').setView([10.5, -61.3], 9);

// Add OpenStreetMap tiles
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Define route points
var routePoints = [
  {
    name: "Port of Spain",
    coords: [10.6669, -61.5189]
  },
  {
    name: "Chaguanas",
    coords: [10.5167, -61.4]
  },
  {
    name: "San Fernando",
    coords: [10.2833, -61.4667]
  }
];

// Add markers for each point
routePoints.forEach(function (point) {
  L.marker(point.coords)
    .addTo(map)
    .bindPopup(point.name);
});

// Draw a line (polyline) connecting the route points
var latlngs = routePoints.map(p => p.coords);

var routeLine = L.polyline(latlngs, {
  color: 'blue',
  weight: 4,
  opacity: 0.7,
  smoothFactor: 1
}).addTo(map);

// Zoom map to fit the route
map.fitBounds(routeLine.getBounds());
