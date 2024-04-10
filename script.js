// Creating a container div and appending it to the body
const container = document.createElement("div");
container.id = "container";
document.body.appendChild(container);

// Creating a button div, setting its text content, and appending it to the container
const button = document.createElement("div");
button.id = "button";
button.textContent = "Create circle";
container.appendChild(button);

// Getting the width and height of the container
const containerWidth = container.offsetWidth;
const containerHeight = container.offsetHeight;
// Calculating the maximum radius based on the container dimensions
let maxRadius = Math.min(containerWidth, containerHeight) / 2;

// Adding event listener to the button for circle creation
button.addEventListener("click", createCircle);

// Function to create a circle
function createCircle() {
  // Creating a div element for the circle
  const circle = document.createElement("div");
  // Adding a class for styling
  circle.classList.add("circle");

  // Setting radius and diameter for the circle
  const radius = 25;
  const diameter = radius * 2;

  // Setting width, height, and background color for the circle
  circle.style.width = `${diameter}px`;
  circle.style.height = `${diameter}px`;
  circle.style.backgroundColor = getRandomColor();

  // Generating random x and y coordinates within the container boundaries
  const maxX = 0.9 * containerWidth - diameter;
  const maxY = 0.9 * containerHeight - diameter;

  // Generating random x and y coordinates within the container
  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  // Setting position and coordinates for the circle
  circle.style.left = `${x}px`;
  circle.style.top = `${y}px`;
  circle.style.position = "absolute";

  // Appending the circle to the container
  container.appendChild(circle);

  // Updating maxRadius
  maxRadius = radius;

  // Resetting circles if maxRadius becomes too small
  if (maxRadius <= 1) {
    resetCircles();
  }
}

// Function to reset circles
function resetCircles() {
  // Selecting all circles within the container
  const circles = container.querySelectorAll(".circle");
  // Removing each circle
  circles.forEach((circle) => circle.remove());
  // Recalculating maxRadius based on container dimensions
  maxRadius = Math.min(containerWidth, containerHeight) / 2;
}

// Function to generate random color
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
