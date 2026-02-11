// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

const gif = document.getElementById("gif");

document.addEventListener("mousemove", (e) => {
  gif.style.left = e.clientX + "px";
  gif.style.top = e.clientY + "px";
});

// Click Envelope

envelope.addEventListener("click", () => {
  envelope.style.display = "none";
  letter.style.display = "flex";

  setTimeout(() => {
    document.querySelector(".letter-window").classList.add("open");
  }, 50);
});

// Logic to move the NO btn

// noBtn.addEventListener("mouseover", () => {
//   const min = 200;
//   const max = 200;

//   const distance = Math.random() * (max - min) + min;
//   const angle = Math.random() * Math.PI * 2;

//   const moveX = Math.cos(angle) * distance;
//   const moveY = Math.sin(angle) * distance;

//   noBtn.style.transition = "transform 0.3s ease";
//   noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
// });

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// NO is clicked
noBtn.addEventListener("click", () => {
  //title.textContent = "Yippeeee!";

  catImg.src = "no_cat.gif";
  catImg.style.width = "300px";

  noBtn.style.display = "none";
});

// YES is clicked

yesBtn.addEventListener("click", () => {
  title.textContent = "Yippeeee!";

  const gifs = ["flowers.gif", "lovers.gif", "flower.gif", "cute.gif"];

  let index = 0;

  catImg.src = gifs[index];
  catImg.style.width = "300px";

  document.querySelector(".letter-window").classList.add("final");
  buttons.style.display = "none";
  finalText.style.display = "block";

  // change gif every 1.5 seconds
  setInterval(() => {
    index = (index + 1) % gifs.length;
    catImg.src = gifs[index];
  }, 1500);
});
