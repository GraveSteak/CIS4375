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

