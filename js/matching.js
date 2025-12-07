/* ==========================================
   MATCHING GAME – RANDOM TARGETS + SNAP BACK
========================================== */

const fruitItems = document.querySelectorAll(".fruit-item");
const numberArea = document.getElementById("numberArea");
const resetBtn = document.getElementById("resetMatch");

// Generate angka 1–5 secara acak
function generateRandomTargets() {
    numberArea.innerHTML = "";
    
    const nums = [1, 2, 3, 4, 5].sort(() => Math.random() - 0.5);

    nums.forEach(n => {
        const box = document.createElement("div");
        box.classList.add("target-box");
        box.dataset.num = n;
        box.innerHTML = `<p>${n}</p>`;
        numberArea.appendChild(box);
    });
}

generateRandomTargets();


let draggedItem = null;
let originalParent = null;

fruitItems.forEach(item => {

    item.addEventListener("dragstart", () => {
        draggedItem = item;
        originalParent = item.parentNode;
        setTimeout(() => item.style.opacity = "0.5", 0);
    });

    item.addEventListener("dragend", () => {
        draggedItem.style.opacity = "1";
        draggedItem = null;
    });
});


// Target interaction
numberArea.addEventListener("dragover", e => e.preventDefault());
document.querySelector(".fruit-area").addEventListener("dragover", e => e.preventDefault());

numberArea.addEventListener("drop", e => {
    const target = e.target.closest(".target-box");
    if (!target) return;

    let correctNum = draggedItem.dataset.num;

    if (correctNum === target.dataset.num) {
        target.classList.add("correct");
        target.innerHTML = "";
        target.appendChild(draggedItem);
        playSound("correct");

    } else {
        target.classList.add("wrong");
        playSound("wrong");

        // kembalikan ke parent awal
        originalParent.appendChild(draggedItem);

        setTimeout(() => target.classList.remove("wrong"), 600);
    }
});


// Buah bisa balik ke area kiri
document.querySelector(".fruit-area").addEventListener("drop", e => {
    if (!draggedItem) return;
    e.target.appendChild(draggedItem);
});


// RESET GAME
resetBtn.addEventListener("click", () => {
    const fruitArea = document.querySelector(".fruit-area");

    // balikin semua buah
    document.querySelectorAll(".fruit-item").forEach(f => fruitArea.appendChild(f));

    generateRandomTargets();
});
