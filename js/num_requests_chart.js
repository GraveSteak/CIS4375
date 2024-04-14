// lineChart.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas element by its ID
    var ctx = document.getElementById('num_requests_chart').getContext('2d');
    
    fetch('http://localhost:3000/api/num_requests_chart')
        .then(response => {
            if (!response.ok){
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            const Dates = data.map(entry => entry.RequestDate);
            const Number = data.map(entry => entry.NumRequests);
    // Define the data for the line chart
        var data = {
            labels: Dates,
            datasets: [{
                label: 'Number of Requests In a Day',
                data: Number, // Sample data for sales
                fill: false, // Do not fill the area under the line
                borderColor: 'rgba(75, 192, 192, 1)', // Border color for the line
                tension: 0.1 // Line tension (0 means straight lines)
            }]
        };

        // Define options for the line chart
        var options = {
            scales: {
                y: {
                    beginAtZero: true // Start y-axis from zero
                }
            },
            responsive: false, // Disable automatic resizing
            maintainAspectRatio: false, // Don't maintain aspect ratio
        };

        // Create the line chart
        var myLineChart = new Chart(ctx, {
            type: 'line',
            data: data,
            options: options
        });
    });

});
