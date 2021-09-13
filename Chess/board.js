import { loadPieces } from "./pieces.js";

export let canvas = document.querySelector("canvas");
export let c = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

// Board tiles
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    c.beginPath();
    const columns = ["A", "B", "C", "D", "E", "F", "G", "H"];
    c.fillStyle = ["white", "grey"][(i + j) % 2];
    c.fillRect(j * 100, i * 100, 100, 100);
    c.closePath();
  }
}

window.onload = function () {
  let canvas = document.getElementById("boardCanvas");
  let c = canvas.getContext("2d");
  loadPieces();
};

export default { canvas, c };
