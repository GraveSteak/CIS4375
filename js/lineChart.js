// lineChart.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas element by its ID
    var ctx = document.getElementById('myLineChart').getContext('2d');
    
    // Define the data for the line chart
    var data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Sales',
            data: [65, 59, 80, 81, 56, 55], // Sample data for sales
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
        width: 200, // Set width
        height: 200 // Set height
    };

    // Create the line chart
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: options
    });
});
