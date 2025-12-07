/* =======================
   FLIP CARD
======================= */

document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
        card.classList.toggle("flip");
    });
});

/* =======================
   MATCHING GAME
======================= */

document.querySelectorAll(".item").forEach(item => {
    item.addEventListener("dragstart", e => {
        e.dataTransfer.setData("text", e.target.id);
    });
});

document.querySelectorAll(".target").forEach(target => {
    target.addEventListener("dragover", e => e.preventDefault());
    target.addEventListener("drop", e => {
        let dragged = e.dataTransfer.getData("text");
        let expected = "t" + dragged.replace("item", "");

        if (expected === e.target.id) {
            e.target.style.background = "#c2ffcb";
            e.target.innerHTML = "Benar!";
        } else {
            e.target.style.background = "#ffb3b3";
            e.target.innerHTML = "Salah!";
        }
    });
});

/* =======================
   TRACING ANGKA
======================= */

let canvas = document.getElementById("traceCanvas");
let ctx = canvas.getContext("2d");

// Garis putus-putus angka 1–10
ctx.font = "80px Arial";
ctx.strokeStyle = "#ff7f7f";
ctx.setLineDash([12, 15]);

ctx.strokeText("1  2  3  4  5", 40, 120);
ctx.strokeText("6  7  8  9  10", 40, 250);

let isDrawing = false;

canvas.addEventListener("mousedown", () => isDrawing = true);
canvas.addEventListener("mouseup", () => isDrawing = false);

canvas.addEventListener("mousemove", function(e) {
    if (!isDrawing) return;

    ctx.fillStyle = "#222";
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 4, 0, Math.PI * 2);
    ctx.fill();
});
