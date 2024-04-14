document.addEventListener('DOMContentLoaded', function() {
    if (!localStorage.getItem('isLoggedIn')) {
        console.log('is this running?');
        window.location.href = 'admin.html';
    }
});