// Toggle dropdown visibility on click
document.addEventListener("DOMContentLoaded", function () {
    const dropbtn = document.querySelector(".dropbtn");
    const dropdown = document.querySelector(".dropdown-content");

    dropbtn.addEventListener("click", function (e) {
        e.stopPropagation();
        dropdown.classList.toggle("show");
    });

    window.addEventListener("click", function () {
        dropdown.classList.remove("show");
    });
});
