const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

const button = document.createElement("div");
button.id = "button";
button.textContent = "Create circle";
container.appendChild(button);

const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
let maxRadius = Math.min(containerWidth, containerHeight) / 2;
// if (div.offsetWidth < 150 || div.offsetHeight < 100) {
//     resetContainer();
// }

button.addEventListener("click", createCircle);

function createCircle() {
  const circle = document.createElement("div");
  circle.classList.add("circle");

  const radius = 80;
  const diameter = radius;

  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;
  circle.style.backgroundColor = getRandomColor();

  // Generate random x and y coordinates within the container
  const x = Math.floor(Math.random() * (containerWidth - diameter));
  const y = Math.floor(Math.random() * (containerHeight - diameter));

  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.position = "absolute";

  container.appendChild(circle);

  maxRadius = radius;

  if (maxRadius <= 1) {
    resetCircles();
  }
}

function resetCircles() {
  const circles = container.querySelectorAll(".circle");
  circles.forEach((circle) => circle.remove());
  maxRadius = Math.min(containerWidth, containerHeight);
}

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
