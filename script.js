// Get the hidden input box and the tiles in the first row
const guessInput = document.getElementById("user-guess");
const firstRowTiles = document.querySelectorAll(".row:first-child .tile");

// Keep hidden input focused so keyboard typing works anywhere you click
document.addEventListener("click", function() {
  guessInput.focus();
});

// LISTEN FOR TYPING:
guessInput.addEventListener("input", function() {
  const currentText = guessInput.value.toUpperCase();
  
  // Fill each tile in the first row with typed letters
  firstRowTiles.forEach((tile, index) => {
    if (currentText[index]) {
      tile.textContent = currentText[index];
    } else {
      tile.textContent = "";
    }
  });
});