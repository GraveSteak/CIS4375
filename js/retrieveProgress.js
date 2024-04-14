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

document.getElementById('progress-info-container').addEventListener('submit', async function(event) {
    event.preventDefault();

    const ClientID = document.getElementById('ClientID').value.trim();
    const FullName = document.getElementById('FullName').value.trim();
    const Quote = document.getElementById('Quote').value.trim();
    const AllVehicles = document.getElementById('AllVehicles').value.trim();

    if (!ClientID || !FullName || !Quote || !AllVehicles) {
        alert('Please fill out all required fields.');
        return;
    }

    const data = {
        ClientID, 
        FullName, 
        Quote,
        AllVehicles,
    };

    try {
        const response = await fetch(`http://127.0.0.1:3000/api/progress/${ClientID}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const responseData = await response.json();
        alert(responseData.message || 'Client updated successfully');
    } catch (error) {
        console.error('Update error:', error);
        alert('Update failed: ' + error.message);
    }
});
