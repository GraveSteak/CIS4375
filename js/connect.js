window.addEventListener("DOMContentLoaded", (event) => {
    console.log('DOM fully loaded and parsed');
    
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            // Proceed with the fetch request to the backend
            fetch('http://localhost:3000/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Login failed');
                }
                return response.json();
            })
            .then(data => {
                console.log('Login successful:', data);
                // Redirect the user or show login success message
                window.location.href = '/dashboard.html'; // Adjust the redirect URL as needed
            })
            .catch(error => {
                console.error('Error:', error);
                // Optionally, update the DOM to display an error message
                document.getElementById('loginError').textContent = 'Failed to login. Please check your credentials.';
            });
        });
    } else {
        console.log('Login form not found.');
    }
});
