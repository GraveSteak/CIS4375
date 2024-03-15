document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;

            // Extracting the page name from the URL
            let path = window.location.pathname.split('/').pop(); // gets 'about.html' from '/about.html'

            // In case the URL is the root ('/') and defaults to 'index.html'
            if (path === '') {
                path = 'index.html';
            }
            const navList = document.querySelector('.custom-navbar-nav.navbar-nav.ms-auto.mb-2.mb-md-0');
            const navLinks = navList.querySelectorAll('li');
            console.log(navLinks)

            // Iterate through each nav link to find a match
            navLinks.forEach(link => {
                // Get the href attribute and compare it to the current path
                const href = link.querySelector('a').getAttribute('href');
                // If there's a match, mark the link's parent li as active
                if (href === path) {
                    navLinks.forEach(navLink => navLink.classList.remove('active'));
                    link.classList.add('active');
                    console.log("Active class added to: ", href);
                }
            });
        })
        .catch(error => console.error('Error loading the footer:', error));
});
