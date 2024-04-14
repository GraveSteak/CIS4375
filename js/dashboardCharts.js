document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('client-type-counts').getContext('2d');

    fetch('http://localhost:3000/api/client-type-counts')
    .then(response => {
        if (!response.ok){
            throw new Error('Failed to fetch data');
        }
        return response.json();
    })
    .then(data => {
        const TotalClients = data.map(entry => entry.TotalClients);
        const SelfClients = data.map(entry => entry.SelfClients);
        const chartData = {
            labels: ['Third Party', 'Self'],
            datasets: [{
                label: 'Number of Clients',
                data: [TotalClients, SelfClients],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1
            }]
        };

        const options = {
            plugins: {
                legend: {
                    position: 'bottom' // Move the legend to the bottom
                },
                title: {
                    display: true,
                    text: 'Client Type', // Title at the top of the chart
                    padding: {
                        top: 10,
                        bottom: 30
                    },
                    font: {
                        size: 12
                    }
                }
            },
            responsive: true,
            maintainAspectRatio: false,
        };

        new Chart(ctx, {
            type: 'doughnut',
            data: chartData,
            options: options
        });
    });
});

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

document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('average-price-data').getContext('2d');

    fetch('http://localhost:3000/api/average-price-data')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            const dates = data.map(item => {
                const date = new Date(item.RequestDate);
                return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
            });
            const prices = data.map(item => item.AveragePrice);

            var chartData = {
                labels: dates,
                datasets: [{
                    label: 'Average Potential Profit Per Customer',
                    data: prices,
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                }]
            };

            var options = {
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Average Potential Profit'
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
            };

            new Chart(ctx, {
                type: 'line',
                data: chartData,
                options: options
            });
        });
});

document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('top-zip-codes').getContext('2d');

    fetch('http://localhost:3000/api/top-zip-codes')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            const zipCodes = data.map(item => item.Start_Zip);
            const revenues = data.map(item => item.TotalRevenue);

            var chartData = {
                labels: zipCodes,
                datasets: [{
                    label: 'Potential Revenue by ZIP Code',
                    data: revenues,
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            };

            var options = {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Potential Revenue'
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
            };

            new Chart(ctx, {
                type: 'bar',
                data: chartData,
                options: options
            });
        });
});

document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('distance-distribution').getContext('2d');

    fetch('http://localhost:3000/api/distance-distribution')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            const distances = data.map(item => item.General_Distance);

            // Initialize counters for each range
            let rangeCounts = [0, 0, 0]; // [0-150, 150-1000, 1000+]

            distances.forEach(distance => {
                if (distance <= 150) {
                    rangeCounts[0]++; // Increment count for 0-150 miles
                } else if (distance <= 1000) {
                    rangeCounts[1]++; // Increment count for 150-1000 miles
                } else {
                    rangeCounts[2]++; // Increment count for 1000+ miles
                }
            });

            var chartData = {
                labels: ['0 - 150 miles', '150 - 1000 miles', 'Over 1000 miles'],
                datasets: [{
                    label: 'Distance Distribution',
                    data: rangeCounts,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.7)',
                        'rgba(54, 162, 235, 0.7)',
                        'rgba(75, 192, 192, 0.7)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(75, 192, 192, 1)'
                    ],
                    borderWidth: 1
                }]
            };

            var options = {
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Number of Requests'
                        }
                    }
                },
                responsive: true,
                maintainAspectRatio: false,
            };

            new Chart(ctx, {
                type: 'bar', // Using a bar chart for distribution
                data: chartData,
                options: options
            });
        });
});

// lineChart.js

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
    var ctx = document.getElementById('num_requests_chart').getContext('2d');

    fetch('http://localhost:3000/api/num_requests_chart')
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            // Convert date to MM/DD/YYYY format
            const Dates = data.map(entry => {
                const date = new Date(entry.RequestDate);
                return `${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getDate().toString().padStart(2, '0')}/${date.getFullYear()}`;
            });
            const Number = data.map(entry => entry.NumRequests);

            // Define the data for the line chart
            var chartData = {
                labels: Dates,
                datasets: [{
                    label: 'Number of Requests In a Day',
                    data: Number, // Sample data for number of requests
                    fill: false, // Do not fill the area under the line
                    borderColor: 'rgba(75, 192, 192, 1)', // Border color for the line
                    tension: 0.1 // Line tension (0 means straight lines)
                }]
            };

            // Define options for the line chart
            var options = {
                scales: {
                    y: {
                        beginAtZero: true, // Start y-axis from zero
                        title: {
                            display: true,
                            text: 'Number of Requests'
                        }
                    }
                },
                responsive: false, // Disable automatic resizing
                maintainAspectRatio: false, // Don't maintain aspect ratio
            };

            // Create the line chart
            var myLineChart = new Chart(ctx, {
                type: 'line',
                data: chartData,
                options: options
            });
        });
});