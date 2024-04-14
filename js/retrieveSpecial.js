document.getElementById('find_holiday_button').addEventListener('click', function(event) {
    event.preventDefault();
    const date = document.getElementById('date').value.trim();  // Corrected variable name

    if (!date) {
        alert('Please enter a valid date');
        return;
    }

    axios.get(`http://127.0.0.1:3000/api/special/${date}`)
    .then(response => {
        console.log(response.data);
        const data = response.data;
        document.getElementById('holiday-info-container').style.display = 'block';
        document.getElementById('date').value = data.SpecialDate; // Ensure this is correct or just reuse 'date'
        document.getElementById('description').value = data.SpecialDate_Description; // Corrected property name
        document.getElementById('additional_cost').value = data.Additional_Cost || '';
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
        alert('Failed to retrieve holiday data. Make sure it is a valid holiday');
    });
});

document.getElementById('holiday-info-container').addEventListener('submit', async function(event) {
    event.preventDefault();

    const date = document.getElementById('date').value.trim();
    const description = document.getElementById('description').value.trim();
    const additional_cost = document.getElementById('additional_cost').value.trim();

    // Check for completeness of the data
    if (!date || !description || (additional_cost === '')) {  // Changed validation for additional_cost
        alert('Please fill out all required fields.');
        return;
    }

    const data = {
        date, 
        description, 
        additional_cost,
    };

    try {
        const response = await fetch(`http://127.0.0.1:3000/api/special/${date}`, {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(data)
        });

        if (!response.ok) {
            throw new Error(`HTTP status ${response.status}`);
        }

        const responseData = await response.json();
        alert(responseData.message || 'Holiday updated successfully');
    } catch (error) {
        console.error('Update error:', error);
        alert('Update failed: ' + error.message);
    }
});
