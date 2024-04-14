document.getElementById('find_holiday_button').addEventListener('click', function(event) {
    event.preventDefault();
    const holiday = document.getElementById('holiday').value.trim();

    if (!holiday) {
        alert('Please enter a valid holiday date');
        return;
    }

    axios.get(`http://127.0.0.1:3000/api/special/${holiday}`)
    .then(response => {
        const data = response.data;
        document.getElementById('description').value = data.SpecialDate_Description || ''; // Update description field
        document.getElementById('additional_cost').value = data.Additional_Cost || ''; // Update additional cost field
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to retrieve holiday data. Make sure it is a valid holiday');
    });
}); 

// Fetch holidays data
document.getElementById('holiday-find-container').addEventListener('submit', async function(event) {
    event.preventDefault();

    const holiday = document.getElementById('holiday_create_date').value.trim();
    const description = document.getElementById('holiday_create_description').value.trim();
    const additional_cost = document.getElementById('holiday_create_additional_cost').value.trim();

    // Check for completeness of the data
    if (!holiday || !description || (additional_cost === '')) {
        alert('Please fill out all required fields.');
        return;
    }

    try {
        const response = await fetch(`http://127.0.0.1:3000/api/special/${holiday}`);
        if (!response.ok) {
            throw new Error('Failed to retrieve holiday data');
        }
        const data = await response.json();
        // Display the retrieved holiday data in the UI
        document.getElementById('description').value = data.SpecialDate_Description;
        document.getElementById('additional_cost').value = data.Additional_Cost || '';
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to retrieve holiday data. Make sure it is a valid holiday');
    }
});

//Delete function of Holidays
document.getElementById('delete_holiday_button').addEventListener('click', async function(event) {
    event.preventDefault();
    
    const holiday = document.getElementById('holiday').value.trim();

    if (!holiday) {
        alert('Please enter a valid holiday date');
        return;
    }

    try {
        const response = await fetch(`http://127.0.0.1:3000/api/special/${holiday}`, {
            method: 'DELETE',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({}) // No need to send data in the body for a DELETE request
        });

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const responseData = await response.json();
        alert(responseData.message || 'Holiday deleted successfully');
        history.go(); // Reload the page after successful deletion
        
    } catch (error) {
        console.error('Delete error:', error);
        alert('Delete failed: ' + error.message);
    }
});


document.getElementById('update_holiday_button').addEventListener('click', async function(event) {
    event.preventDefault();

    // Get form input values
    const holidayDate = document.getElementById('holiday').value.trim();
    const description = document.getElementById('description').value.trim();
    const additionalCost = document.getElementById('additional_cost').value.trim();

    try {
        // Construct payload
        const payload = {
            description: description,
            additional_cost: additionalCost
        };

        // Send PUT request to update holiday using axios
        const response = await axios.put(`http://127.0.0.1:3000/api/special/${holidayDate}`, payload);

        if (response.status !== 200) {
            throw new Error(`HTTP status ${response.status}`);
        }

        alert('Holiday updated successfully');
        location.reload(); // Reload the page after successful update
    } catch (error) {
        console.error('Update error:', error);
        alert('Update failed: ' + error.message);
    }
});


