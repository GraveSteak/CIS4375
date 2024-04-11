document.addEventListener('DOMContentLoaded', function () {
    const operationSelect = document.getElementById('crud-operation'); // Make sure the ID matches your updated HTML
    const formContainer = document.getElementById('form-container'); // For create client
    const formFindContainer = document.getElementById('form-find-container'); // For find client

    operationSelect.addEventListener('change', function() {
        // Hide both forms initially
        formContainer.style.display = 'none';
        formFindContainer.style.display = 'none';

        // Then, show the selected form based on the dropdown's value
        if (this.value === 'create') {
            console.log("Attempting to display form-container");
            formContainer.style.display = 'block';
        } else if (this.value === 'find') {
            console.log("Attempting to display form-find-container");
            formFindContainer.style.display = 'block';
        } else if (this.value === 'choose') { // Assuming '' is the value for "Choose..."
            console.log("No operation selected, hiding both forms");
            // Both forms are already set to display: none; above
    }
    });
});

