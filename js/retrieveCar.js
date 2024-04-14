document.getElementById('find_car_button').addEventListener('click', function() {
    const clientId = document.getElementById('ClientID').value.trim();
    if (!clientId) {
        alert('Please enter a valid Client ID');
        return;
    }

    axios.get(`http://127.0.0.1:3000/api/car?ClientID=${clientId}`)
        .then(response => {
            const cars = response.data;
            console.log(cars);
            const displayArea = document.getElementById('carInfoDisplay');
            console.log('Display Area:', displayArea);
            if (displayArea) {
                displayArea.innerHTML = '...'; // Your code to modify innerHTML
              } else {
                console.error('No display area element found');
              }
            displayArea.innerHTML = ''; // Clear previous contents

            if (cars.length === 0) {
                displayArea.innerHTML = '<p>No cars found for this client.</p>';
            } else {
                const list = document.createElement('ul');
                list.style.listStyleType = 'none';
                list.style.padding = '0';
                list.style.display = 'flex'; // Set display to flex to align items horizontally
                list.style.flexWrap = 'wrap'; // Allow items to wrap to the next line if there's not enough space
                list.style.justifyContent = 'space-evenly'
                cars.forEach(car => {
                    const item = document.createElement('li');
                    item.style.background = '#3b5d50'; // Add border around each item
                    item.style.borderRadius = '5px'; // Add border radius for rounded corners
                    item.style.margin = '10px';
                    item.style.padding = '50px'
                    item.style.color = 'white';
                    item.innerHTML = `
                        <h2><b><u>Car ID: ${car.Vehicle_Request_ID}</u></b></h2>
                        <h4>Client ID:${car.ClientID}</h4>
                        <h5>Vehicle Make: ${car.VehicleMake}</h5>
                        <h5>Vehicle Model: ${car.VehicleModel}</h5>
                        <h5>Vehicle Type: ${car.VehicleType}</h5>
                        <h5>Year: ${car.year}</h5>
                        <h5>Operable: ${car.Operable}</h5>
                    `;
                    list.appendChild(item);
                });
                displayArea.appendChild(list);
            }
        })
        .catch(error => {
            console.error('Failed to retrieve cars:', error);
            alert('Failed to retrieve car data. Please check the console for more information.');
        });
});
