document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('holiday_create_form');
    form.addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevent default form submission behavior

		// Retrieve form data
        const formData = new FormData(form);
        const date = formData.get('holiday_create_date');
        const description = formData.get('holiday_create_description');
        const additional_cost = formData.get('holiday_create_additional_cost');

        // Define the URL, payload, and request options
        const url = 'http://127.0.0.1:3000/api/special';
        const payload = {
            date,
            description,
            additional_cost
        };
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic SVRjeWNsZWFkbWluOklUY3ljbGVwYXNzd29yZA=='
            }
        };

        // Send POST request using Axios
        axios.post(url, payload, requestOptions)
            .then(response => {
                // Check if response is OK
                if (response.status === 200) {
                    // Parse response data
                    const result = response.data;
                    console.log(result);
                    alert('Holiday created successfully!');
                } else {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
            })
            .catch(error => {
                // Handle errors
                console.error(error);
                alert('Failed to create holiday. Please try again.');
            });
    });
});