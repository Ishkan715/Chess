import { canvas } from "./board.js";
import { c } from "./board.js";
import { loadPieces, addPiece, loadImage } from "./pieces.js";

// function onDragStart(event) {

//   event.dataTransfer.setData("text/plain", event.target.id);
// }

// document.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log(e.target.tagName);
// });

// const canvasMov = document.getElementById("boardCanvas");
// const c2 = canvasMov.getContext("2d");

// var bPawn = new Image();
// const bPawn2 = document.getElementById("blackPawn");

// var x = 200;
// var y = 300;

// bPawn.onload = animate;
// bPawn.src = "./GamePieces/blackPawn.png"; // load image

// function animate() {
//   // c2.globalCompositeOperation = "destination-out";
//   // c2.clearRect(700, 600, 100, 100);
//   c2.drawImage(bPawn, x, y); // draw image at current position
//   x -= 4;
//   if (x > 250) requestAnimationFrame(animate); // loop
// }

function movePiece() {
  const canvas = document.querySelector("canvas");
  const c2 = canvas.getContext("2d");
  const bPawn = document.getElementById("blackPawn");
  bPawn.parentNode.removeChild(bPawn);
  const parent = document.getElementById("boardCanvas");
  parent.appendChild(bPawn);

  const bPawnNew = document.createElement("img");
  addPiece("blackPawn");
  loadImage("blackPawn");

  bPawnNew.onload = animate;
  bPawnNew.src = "./GamePieces/blackPawn.png"; // load image

  function animate() {
    let x = 200;
    let y = 300;
    // c2.globalCompositeOperation = "destination-out";
    // c2.clearRect(700, 600, 100, 100);
    c2.drawImage(bPawnNew, x, y); // draw image at current position
    x -= 4;
    if (x > 250) requestAnimationFrame(animate); // loop
  }
  animate();
}

movePiece();
