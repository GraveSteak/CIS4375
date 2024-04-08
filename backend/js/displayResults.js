document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('clientForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const formObject = {};
        formData.forEach((value, key) => formObject[key] = value);

        axios.post('http://localhost:3000/form', formObject)
            .then(function(response) {
                if(response.data.success) {
                    const genPrice = response.data.genPrice;
                    window.location.href = `result.html?genPrice=${encodeURIComponent(genPrice)}`;
                } else {
                    alert('There was an issue calculating the price. Please try again.');
                }
            })
            .catch(function(error) {
                console.error('Error:', error);
                alert('An error occurred. Please try again.');
            });
    });
});
