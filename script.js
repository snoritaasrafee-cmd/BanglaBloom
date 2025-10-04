// Initialize Leaflet map
var map = L.map('map').setView([23.8103, 90.4125], 7); // Bangladesh center

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors'
}).addTo(map);

// Mock bloom points
var blooms = [
    {lat: 23.8103, lon: 90.4125, name: "Mango Bloom"},
    {lat: 24.3636, lon: 88.6241, name: "Cotton Bloom"},
    {lat: 22.3569, lon: 91.7832, name: "Jute Bloom"}
];

blooms.forEach(b => {
    L.marker([b.lat, b.lon]).addTo(map)
     .bindPopup(`<b>${b.name}</b>`);
});

// Chart.js example: Bloom trends
var ctx = document.getElementById('chart').getContext('2d');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul'],
        datasets: [{
            label: 'Bloom Activity',
            data: [2,5,7,10,6,3,1],
            borderColor: 'green',
            fill: false
        }]
    },
    options: {
        responsive: true
    }
});
