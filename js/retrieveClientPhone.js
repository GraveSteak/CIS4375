document.getElementById('find_client_button').addEventListener('click', function(event) {
    event.preventDefault();
    const clientid = document.getElementById('clientid').value.trim();

    if (!clientid) {
        alert('Please enter a valid client ID');
        return;
    }

    axios.get(`http://127.0.0.1:3000/api/clients/${clientid}`)
    .then(response => {
        const data = response.data;
        if (!data) {
            alert('Client not found');
            return;
        }
        const displayArea = document.getElementById('client-info-container');
        if (!displayArea) {
            console.error('No display area element found');
            return;
        }
        displayArea.innerHTML = ''; // Clear previous contents

        // Update form fields
        displayArea.style.display = 'block';

        // Create a list to display client data
        const list = document.createElement('ul');
        list.style.listStyleType = 'none';
        list.style.padding = '0';
        list.style.display = 'flex'; // Set display to flex to align items horizontally
        list.style.flexWrap = 'wrap'; // Allow items to wrap to the next line if there's not enough space
        list.style.justifyContent = 'space-evenly';

        // Create a list item for each attribute
        const item = document.createElement('li');
        item.style.background = '#3b5d50'; // Add border around each item
        item.style.borderRadius = '5px'; // Add border radius for rounded corners
        item.style.margin = '10px';
        item.style.padding = '20px';
        item.style.color = 'white';
        item.innerHTML = `
            <h2><b><u>Client ID: ${data.ClientID}</u></b></h2>
            <h4>First Name:${data.C_F_Name}</h4>
            <h5>Last Name: ${data.C_L_Name}</h5>
            <h5>Email: ${data.C_email}</h5>
            <h5>Company: ${data.C_Company}</h5>
            <h5>Phone Number: ${data.phone_numb}</h5>
        `;
        list.appendChild(item);
        displayArea.appendChild(list); // Moved inside the then block
    })
    .catch(error => {
        console.error('Failed to retrieve client data:', error);
        alert('Failed to retrieve client data. Please check the console for more information.');
    });
});





/* 
document.getElementById('update_client').addEventListener('click', function(event) {
    event.preventDefault();

    const data = {
        client_ID: document.getElementById('client_id').value,
        firstName: document.getElementById('first_name').value,
        lastName: document.getElementById('last_name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        number_requests: document.getElementById('number_requests').value,
        phoneNumber: document.getElementById('phone_number').value
    };

    const phone_number = document.getElementById('phone_number').value;

    updateClient(data, phone_number, connection)
        .then(affectedRows => {
            if (affectedRows > 0) {
                alert('Client updated successfully!');
            } else {
                alert('No changes were made or client not found.');
            }
        })
        .catch(error => {
            console.error('Failed to update client:', error);
            alert('Error updating client. See console for more details.');
        });
});

document.addEventListener('DOMContentLoaded', function() {
    const deleteButton = document.getElementById('delete_client');
    deleteButton.addEventListener('click', function() {
        const clientId = document.getElementById('phone_number').value; // Assuming clientId comes from phone_number input
        deleteClient(clientId);
    });
});

*/

