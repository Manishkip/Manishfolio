document.addEventListener("DOMContentLoaded", function() {
    // Check if the current page is index.html
    if (window.location.pathname.includes("index.html") || window.location.pathname.includes("")) {
        // Initialize the Typed instance only if on index.html
        var typed = new Typed(".multiple-text", {
            strings: ["Software Engineer", "Web Developer"],
            typeSpeed: 100,
            backSpeed: 100,
            backDelay: 1000,
            loop: true
        });
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});

