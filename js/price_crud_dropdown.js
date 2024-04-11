    const operationSelect = document.getElementById('crud-operation'); // Make sure the ID matches your updated HTML
    const PriceFindContainer = document.getElementById('price-find-container'); // For find client

    operationSelect.addEventListener('change', function() {
        // Hide form initially
        PriceFindContainer.style.display = 'none';

        // Then, show the selected form based on the dropdown's value
        if (this.value === 'find') {
            console.log("Attempting to display form-find-container");
            PriceFindContainer.style.display = 'block';
        } else if (this.value === 'choose') { // Assuming '' is the value for "Choose..."
            console.log("No operation selected, hiding form(s)");
            // Both forms are already set to display: none; above
    }

    });
