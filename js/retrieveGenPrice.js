document.getElementById('find_quote_button').addEventListener('click', function(event) {
    console.log('ready!')
    event.preventDefault();
    const clientId = document.getElementById('client_id').value.trim();
    console.log('smthsmth')

    if (!clientId) {
        alert('Please enter a valid Client ID');
        return;
    }

    axios.get(`http://127.0.0.1:3000/api/price/${clientId}`)
        .then(response => {
            console.log(response.data); // Log the received data
            const data = response.data;
            document.getElementById('price-info-container').style.display = 'block'; // Show the form

            // Formatting the price as USD currency
            const formattedPrice = new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(data.Gen_Price || 0);  // Ensures zero is formatted if undefined or null

            document.getElementById('Gen_Price').value = formattedPrice;
            
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            alert('Failed to retrieve price data. Make sure it exists');
        });
});

