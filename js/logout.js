function logout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = 'admin.html'; // Adjust the URL as needed for your site
}
