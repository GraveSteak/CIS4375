document.addEventListener('DOMContentLoaded', function () {
    const operationSelect = document.getElementById('crud-operation');
    const holidayFind = document.getElementById('holiday-find-container');
    const holidayCreate = document.getElementById('holiday-create-container');

    operationSelect.addEventListener('change', function() {
        // Hide both forms initially
        holidayCreate.style.display = 'none';
        holidayFind.style.display = 'none';

        // Then, show the selected form based on the dropdown's value
        if (this.value === 'choose') {
            holidayCreate.style.display = 'none';
            holidayFind.style.display = 'none';
        } else if (this.value === 'find') {
            holidayCreate.style.display = 'none';
            holidayFind.style.display = 'block';
        } else if (this.value === 'create') {
            holidayCreate.style.display = 'block';
            holidayFind.style.display = 'none';
        }
    });
});



/*
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

 */