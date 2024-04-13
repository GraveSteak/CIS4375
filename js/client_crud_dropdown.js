document.addEventListener('DOMContentLoaded', function () {
    const operationSelect = document.getElementById('crud-operation'); // Make sure the ID matches your updated HTML
    const formContainer = document.getElementById('formContainer'); // For create client
    const formFindContainer = document.getElementById('form-find-container'); // For find client

    operationSelect.addEventListener('change', function() {
        // Hide both forms initially
        formContainer.style.display = 'none';
        formFindContainer.style.display = 'none';

        // Then, show the selected form based on the dropdown's value
        if (this.value === 'create') {
            console.log("Attempting to display creating client form");
            formContainer.style.display = 'block';
            formFindContainer.style.display = 'none';
        } else if (this.value === 'find') {
            console.log("Attempting to display finding client form");
            formContainer.style.display = 'none';
            formFindContainer.style.display = 'block';
        } else if (this.value === 'choose') { // Assuming '' is the value for "Choose..."
            console.log("No operation selected, hiding both forms");
            // Both forms are already set to display: none; above
            formContainer.style.display = 'none';
            formFindContainer.style.display = 'none';
    }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('clientCreate');
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission
        const formData = new FormData(form);
        const url = form.action;
        const method = form.method;
        
        // Convert FormData to JSON
        const jsonData = {};
        formData.forEach((value, key) => { jsonData[key] = value; });
        
        // Fetch API to send data
        fetch(url, {
            method: method,
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Client created successfully!');
            form.reset(); // Optionally reset form after successful submit
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Failed to create client');
        });
    });
});
