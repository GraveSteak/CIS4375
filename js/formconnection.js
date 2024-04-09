document.getElementById('clientForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    try {
        const response = await axios.post('http://localhost:3000/form', data);
        console.log(response.data);
        // Assuming genPrice is part of the response
        const genPrice = response.data.genPrice;
        // Redirect to quote.html with genPrice as a URL parameter
        window.location.href = `quote.html?price=${genPrice.toFixed(2)}`;
    } catch (error) {
        console.error(error);
        alert('Failed to create client');
    }
});


