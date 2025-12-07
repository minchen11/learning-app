/* =====================================
   TRACING NUMBER CANVAS
===================================== */

const canvas = document.getElementById("traceCanvas");
const ctx = canvas.getContext("2d");

ctx.font = "80px Arial";
ctx.strokeStyle = "#ff7f7f";
ctx.lineWidth = 3;
ctx.setLineDash([15, 15]);

ctx.strokeText("1  2  3  4  5", 50, 120);
ctx.strokeText("6  7  8  9 10", 50, 250);

let drawing = false;

canvas.addEventListener("mousedown", () => drawing = true);
canvas.addEventListener("mouseup", () => drawing = false);
canvas.addEventListener("mouseleave", () => drawing = false);

canvas.addEventListener("mousemove", (e) => {
    if (!drawing) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.setLineDash([]); // solid line for drawing
    ctx.fillStyle = "#333";

    ctx.beginPath();
    ctx.arc(x, y, 4, 0, Math.PI * 2);
    ctx.fill();
});
