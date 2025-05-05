document.addEventListener('DOMContentLoaded', function() {
    const profileLinks = document.querySelectorAll('.profile-link');
    const profilePages = document.querySelectorAll('.profile-page');
    const backLinks = document.querySelectorAll('.profile-page a');

    function hideAllPages() {
        profilePages.forEach(page => {
            page.style.display = 'none';
        });
        document.querySelector('.profile-selection').style.display = 'block';
    }

    profileLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            hideAllPages();
            document.getElementById(targetId).style.display = 'block';
            document.querySelector('.profile-selection').style.display = 'none';
        });
    });

    backLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            hideAllPages();
        });
    });

    hideAllPages();
    document.querySelector('.profile-selection').style.display = 'block';
});