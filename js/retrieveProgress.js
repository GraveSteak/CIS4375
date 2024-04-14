document.getElementById('find_progress_button').addEventListener('click', function(event) {
    event.preventDefault();
    const ClientID = document.getElementById('ClientID').value.trim();

    if (!ClientID) {
        alert('Please enter a valid Client ID');
        return;
    }

    axios.get(`http://127.0.0.1:3000/api/progress/${ClientID}`)
    .then(response => {
        console.log(response.data);
        const data = response.data;
        document.getElementById('progress-info-container').style.display = 'block';
        document.getElementById('FullName').value = data.Client_Name_Comb;
        document.getElementById('Quote').value = data.Price;
        document.getElementById('AllVehicles').value = data.List_Of_Vehicles || '';
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to retrieve client data. Please make sure the client exists');
    });
});

document.getElementById('progress_info_form').addEventListener('submit', async function(event) {
    event.preventDefault();

    // Get form input values
    const ClientID = document.getElementById('ClientID').value.trim();
    const full_name = document.getElementById('FullName').value.trim();
    const quote = document.getElementById('Quote').value.trim();
    const allVehicles = document.getElementById('AllVehicles').value.trim();


    // Validate input
    if (!ClientID) {
        alert('Client ID not found in URL.');
        return;
    }

    // Check if at least one field is provided
    if (!full_name && !quote && !allVehicles) {
        alert('Please provide at least one field (Full Name, Quote, or All Vehicles) to update.');
        return;
    }

    // Construct payload
    const payload = {};
    if (full_name) payload.full_name = full_name;
    if (quote) payload.quote = quote;
    if (allVehicles) payload.allVehicles = allVehicles;

    try {
        // Send PUT request to update progress
        const response = await axios.put(`http://127.0.0.1:3000/api/progress/${ClientID}`, payload, {
            headers: {
                'Content-Type': 'application/json',
            }
        });

        // Check if response is successful
        if (response.status === 200) {
            alert('Client updated successfully!');
            // Reload the page or perform any other actions needed
            location.reload();
        } else {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error('Update error:', error);
        alert('Failed to update client. Please try again.');
    }
});

