// JavaScript for dropdown menu
document.addEventListener('DOMContentLoaded', function() {
    let dropdowns = document.getElementsByClassName('dropdown');

    for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].addEventListener('mouseover', function() {
            this.getElementsByClassName('dropdown-content')[0].style.display = 'block';
        });
        dropdowns[i].addEventListener('mouseout', function() {
            this.getElementsByClassName('dropdown-content')[0].style.display = 'none';
        });
    }
});

// Add JavaScript for any interactive effects or animations here
