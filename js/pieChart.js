// pieChart.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    // Define the context for the pie chart outside the fetch call
    var ctx = document.getElementById('myPieChart1').getContext('2d');
    
    fetch('http://localhost:3000/api/car-types')
        .then(response => {
            if (!response.ok){
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            const carTypes = data.map(entry => entry.VehicleType);
            const counts = data.map(entry => entry.count);

    // Define the data for the pie chart
    var data = {
            labels: carTypes, // Your array of labels (e.g., ['Sedan', 'SUV', 'Convertible'])
            datasets: [{
                data: counts, // Your array of data points corresponding to 'carTypes'
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                    'rgba(255, 206, 86, 0.7)',
                    'rgba(75, 192, 192, 0.7)',
                    'rgba(153, 102, 255, 0.7)',
                    'rgba(255, 159, 64, 0.7)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }],
        };
    // Define options for the pie chart (if needed)
    var options = {
        responsive: false, // Disable automatic resizing
        maintainAspectRatio: false, // Don't maintain aspect ratio
        plugins: {title: {
            display: true,
            text: "Types of Cars"
        },
        legend: {
            display: true,
            position: 'bottom',}
    }
};

    // Create the pie chart
    var myPieChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: options,
    });
    })
    .catch(error => console.error('Error fetching data:', error));
});
// Remove the extra closing curly braces
