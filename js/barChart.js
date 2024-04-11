// barChart.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the canvas element by its ID
    var ctx = document.getElementById('myBarChart').getContext('2d');
    
    // Define the data for the bar chart
    var data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [{
            label: 'Something',
            data: [65, 59, 80, 81, 56, 55], // Sample data for sales
            backgroundColor: 'rgba(54, 162, 235, 0.7)', // Background color for bars
            borderColor: 'rgba(54, 162, 235, 1)', // Border color for bars
            borderWidth: 1 // Border width for bars
        }]
    };

    // Define options for the bar chart
    var options = {
        scales: {
            y: {
                beginAtZero: true // Start y-axis from zero
            }
        },
        responsive: false, // Disable automatic resizing
        maintainAspectRatio: false, // Don't maintain aspect ratio
    };

    // Create the bar chart
    var myBarChart = new Chart(ctx, {
        type: 'bar',
        data: data,
        options: options
    });
});
