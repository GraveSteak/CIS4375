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

    const holiday = document.getElementById('holiday').value.trim();
    const description = document.getElementById('description').value.trim();
    const additional_cost = document.getElementById('additional_cost').value.trim();

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

/* 
//Update function (not working yet) 
document.getElementById('update_holiday_button').addEventListener('click', async function(event) {
    event.preventDefault();
    
    const holiday = document.getElementById('holiday').value.trim();

    if (!holiday) {
        alert('Please enter a valid holiday date');
        return;
    }

    try {
        const response = await fetch(`http://127.0.0.1:3000/api/special/${holiday}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({date, description, additional_cost}) //needs double-checking 
        });

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const responseData = await response.json();
        alert(responseData.message || 'Holiday updated successfully');
        location.reload(); // Reload the page after successful deletion
    } catch (error) {
        console.error('Update error:', error);
        alert('Update failed: ' + error.message);
    }
});
*/
