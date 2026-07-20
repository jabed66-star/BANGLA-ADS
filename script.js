// script.js
document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");

    // Sidebar Toggle for Mobile Devices
    if (menuToggle && sidebar) {
        menuToggle.addEventListener("click", () => {
            sidebar.classList.toggle("open");
        });
    }

    // Identify current page and highlight sidebar menu
    const currentLocation = location.href;
    const menuItems = document.querySelectorAll('.nav-menu a');
    
    menuItems.forEach(item => {
        if(currentLocation.includes(item.getAttribute('href'))) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});
