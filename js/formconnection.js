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
      alert('Client created successfully');
      // You can redirect or perform any other action after successful creation
    } catch (error) {
      console.error(error);
      alert('Failed to create client');
    }
});


