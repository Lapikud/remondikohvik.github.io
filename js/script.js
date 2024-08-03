document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove the class from all anchors
        document.querySelectorAll('a[href^="#"]').forEach(a => a.classList.remove('highlight'));

        // Add the class to the clicked anchor
        this.classList.add('highlight');

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


//new size new div under 600 px for calender and maps

window.addEventListener('resize', function () {
    if (window.innerWidth <= 600) {
        const originalDiv = document.getElementsByClassName('cal_maps');
        const newDiv = document.getElementById('newDiv_calender_maps');
        if (originalDiv && newDiv) {
            newDiv.innerHTML = originalDiv.innerHTML;
            originalDiv.innerHTML = '';
        }
    }
});

// Trigger the resize event on page load
window.dispatchEvent(new Event('resize'));
