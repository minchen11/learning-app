/* =======================
   FLIP CARD
======================= */

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flip");
    });
});