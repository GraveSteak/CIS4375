// Assuming you are using the form id="clientCreate"
document.getElementById('clientCreate').addEventListener('submit', function(event){
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Collect form data
    const formData = {
        firstName: this.elements['C_F_Name'].value,
        lastName: this.elements['C_L_Name'].value,
        phoneNumber: this.elements['phoneNumber'].value,
        carID: this.elements['carID'].value,
        email: document.getElementById('email').value
    };

    // Send the form data to the server using fetch API
    fetch('/api/clients', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success response, maybe clear the form or show a success message
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle errors here, such as showing an error message to the user
    });
});
