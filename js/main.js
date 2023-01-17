// MENU
function slideOut() {
  document.getElementById('check').checked = false;
}

// DARK-MODE
document.querySelector("#btn").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode")
})