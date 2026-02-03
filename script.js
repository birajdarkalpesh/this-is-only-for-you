const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const surprise = document.getElementById("surprise");
const music = document.getElementById("bgMusic");

function moveNoButton() {
  const maxX = 200;
  const maxY = 120;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

// Desktop + Mobile
noBtn.addEventListener("mouseover", moveNoButton);
noBtn.addEventListener("touchstart", moveNoButton);

yesBtn.addEventListener("click", () => {
  document.querySelector(".container").style.display = "none";
  surprise.classList.remove("hidden");
  music.play();
  createHearts();
});

function createHearts() {
  for (let i = 0; i < 40; i++) {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 3000);
  }
}
