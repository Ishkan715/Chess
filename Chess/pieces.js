import { canvas, c } from "./board.js";

function addPiece(name) {
  const canvas = document.querySelector("canvas");
  let img = document.createElement("img");
  img.src = `./GamePieces/${name}.png`;
  img.height = 50;
  img.width = 50;
  img.id = name;
  // img.draggable = true;
  // img.loading = "lazy";
  canvas.appendChild(img);
  console.log(img);
}

addPiece("whiteKing");
addPiece("whiteQueen");
addPiece("whiteRook");
addPiece("whiteBishop");
addPiece("whiteKnight");
addPiece("whitePawn");

addPiece("blackKing");
addPiece("blackQueen");
addPiece("blackRook");
addPiece("blackBishop");
addPiece("blackKnight");
addPiece("blackPawn");

function loadPieces() {
  //// White Pieces ////

  // White King
  const wKing = document.getElementById("whiteKing");
  c.drawImage(wKing, 305, 0);
  // White Queen
  const wQueen = document.getElementById("whiteQueen");
  c.drawImage(wQueen, 405, 0);
  // White Rook
  const wRook = document.getElementById("whiteRook");
  c.drawImage(wRook, 15, 0);
  c.drawImage(wRook, 715, 0);
  // White Bishop
  const wBishop = document.getElementById("whiteBishop");
  c.drawImage(wBishop, 205, 0);
  c.drawImage(wBishop, 505, 0);
  // White Knight
  const wKnight = document.getElementById("whiteKnight");
  c.drawImage(wKnight, 105, 0);
  c.drawImage(wKnight, 605, 0);
  // White Pawn
  const wPawn = document.getElementById("whitePawn");
  c.drawImage(wPawn, 20, 100);
  c.drawImage(wPawn, 120, 100);
  c.drawImage(wPawn, 220, 100);
  c.drawImage(wPawn, 320, 100);
  c.drawImage(wPawn, 420, 100);
  c.drawImage(wPawn, 520, 100);
  c.drawImage(wPawn, 620, 100);
  c.drawImage(wPawn, 720, 100);

  //// Black Pieces ////

  // Black King
  const bKing = document.getElementById("blackKing");
  c.drawImage(bKing, 305, 700);
  // Black Queen
  const bQueen = document.getElementById("blackQueen");
  c.drawImage(bQueen, 400, 700);
  // Black Rook
  const bRook = document.getElementById("blackRook");
  c.drawImage(bRook, 15, 700);
  c.drawImage(bRook, 715, 700);
  // Black Bishop
  const bBishop = document.getElementById("blackBishop");
  c.drawImage(bBishop, 205, 700);
  c.drawImage(bBishop, 505, 700);
  // Black Knight
  const bKnight = document.getElementById("blackKnight");
  c.drawImage(bKnight, 105, 700);
  c.drawImage(bKnight, 605, 700);
  // Black Pawn
  const bPawn = document.getElementById("blackPawn");
  // c.drawImage(bPawn, 20, 600);
  // c.drawImage(bPawn, 120, 600);
  // c.drawImage(bPawn, 220, 600);
  // c.drawImage(bPawn, 320, 600);
  // c.drawImage(bPawn, 420, 600);
  // c.drawImage(bPawn, 520, 600);
  // c.drawImage(bPawn, 620, 600);
  c.drawImage(bPawn, 720, 600);
}

function loadImage(name) {
  const image = document.images;
  const downloadingImage = new Image();
  downloadingImage.onload = function () {
    image.src = this.src;
  };
  downloadingImage.src = `./GamePieces/${name}.png`;
}

loadImage("whiteKing");
loadImage("whiteQueen");
loadImage("whiteRook");
loadImage("whiteBishop");
loadImage("whiteKnight");
loadImage("whitePawn");

loadImage("blackKing");
loadImage("blackQueen");
loadImage("blackRook");
loadImage("blackBishop");
loadImage("blackKnight");
loadImage("blackPawn");

export { loadPieces, addPiece, loadImage };
