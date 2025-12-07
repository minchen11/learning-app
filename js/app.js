/* =====================================
   PAGE NAVIGATION + GLOBAL AUDIO HANDLER
===================================== */

const pages = document.querySelectorAll(".page");
const menuBtns = document.querySelectorAll(".menu-btn");

// Navigation
menuBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const page = btn.dataset.page;

        // Update active button
        menuBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        // Show selected page
        pages.forEach(p => p.classList.remove("active", "slide"));
        const selectedPage = document.getElementById(page);

        selectedPage.classList.add("active", "slide");
    });
});


// =====================================
// AUDIO SYSTEM
// =====================================

const sounds = {
    apel: new Audio("sounds/apel.mp3"),
    alpukat: new Audio("sounds/alpukat.mp3"),
    durian: new Audio("sounds/durian.mp3"),
    anggur: new Audio("sounds/anggur.mp3"),
    strawberry: new Audio("sounds/strawberry.mp3"),
    correct: new Audio("sounds/correct.mp3"),
    wrong: new Audio("sounds/wrong.mp3")
};

function playSound(name) {
    if (sounds[name]) {
        sounds[name].currentTime = 0;
        sounds[name].play();
    }
}
