// =========================================
// Md. Ezaz Mahmud Portfolio
// Main JavaScript File
// =========================================

"use strict";


// =========================================
// MOBILE NAVIGATION
// =========================================

const menuToggle =
    document.getElementById("menu-toggle");

const navLinks =
    document.getElementById("nav-links");


menuToggle.addEventListener("click", function () {

    navLinks.classList.toggle("show");

    const isOpen =
        navLinks.classList.contains("show");


    menuToggle.setAttribute(
        "aria-expanded",
        isOpen
    );


    menuToggle.innerHTML =
        isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

});


// =========================================
// CLOSE MOBILE MENU AFTER CLICKING LINK
// =========================================

const navigationLinks =
    document.querySelectorAll(".nav-link");


navigationLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navLinks.classList.remove("show");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );


        menuToggle.innerHTML =
            '<i class="fa-solid fa-bars"></i>';

    });

});


console.log(
    "Ezaz Portfolio Phase 04 loaded successfully."
);
console.log(
    "Ezaz Portfolio Phase 05 loaded successfully."
);
console.log(
    "Ezaz Portfolio Phase 06 loaded successfully."
);