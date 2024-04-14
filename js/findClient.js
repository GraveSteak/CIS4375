document.addEventListener('DOMContentLoaded', () => {
    // Get reference to the "Find" button
    const find_client_button = document.getElementById('find_client');

    // Attach event listener to the "Find" button
    find_client_button.addEventListener('click', handleFindClient);
});

async function handleFindClient(event) {
    event.preventDefault();

    const formData = new FormData(find_client);
    const phoneNumber = formData.get('clientid');

    try {
        const response = await fetch(`/api/clients?${clientid}`);
        const data = await response.json();

        if (data.length > 0) {
            const clientInfo = document.getElementById('find_client');
            console.log('it works!')
            clientInfo.innerHTML = `<h4>Client Information</h4>`;
            for (const key in data[0]) {
                clientInfo.innerHTML += `<p><strong>${key}:</strong> ${data[0][key]}</p>`;
            }
        } else {
            const clientInfo = document.getElementById('find_client');
            clientInfo.innerHTML = `<p>No client found with the given information.</p>`;
        }
    } catch (error) {
        console.error('Error fetching client information:', error);
        const clientInfo = document.getElementById('find_client');
        clientInfo.innerHTML = `<p>Error fetching client information. Please try again later.</p>`;
    }
}

// Attach event listener directly
document.getElementById('find_client').addEventListener('click', handleFindClient);

// Export the handleFindClient function if you need to access it in other scripts
window.handleFindClient = handleFindClient;
