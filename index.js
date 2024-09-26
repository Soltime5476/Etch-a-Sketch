let usingRandomColor = false
const containerSize = 640;
const gridDefaultSize = 16
const defaultColor = "darkred"

function getRandomColor() {
  let hexStr = "#"
  for (let i = 0; i < 6; i++) {
    hexStr += Math.floor(Math.random() * 16).toString(16);
  }
  return hexStr
}

function mouseEnterCallback(event) {
  const grid = event.target
  if (usingRandomColor) {
    grid.style.backgroundColor = getRandomColor()
  }
  else {
    grid.style.backgroundColor = defaultColor
  }
}

function generateGrid(gridSize) {
  // reset the button modes
  normalModeButton.disabled = true
  randomModeButton.disabled = false

  const container = document.querySelector("#container")
  container.replaceChildren()
  const sideLength = containerSize / gridSize
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const element = document.createElement("div")
      element.className = "grid"
      element.id = `square${i}-${j}`
      element.style.width = `${sideLength}px`
      element.style.height = `${sideLength}px`
      element.style.borderWidth = `${Math.min(sideLength / 20, 4)}px`
      element.addEventListener("mouseenter", mouseEnterCallback)
      container.appendChild(element)
    }
  }
}

function promptNewGrid() {
  const gridSize = parseInt(prompt("Enter the new grid size."));
  if (isNaN(gridSize) || gridSize <= 0 || gridSize > 100) {
    alert("Grid size must be between 1 and 100.")
    return
  }
  generateGrid(gridSize)
}

function clearGrid() {
  const container = document.querySelector("#container")
  for (let i of container.childNodes) {
    i.style.removeProperty("background-color")
  }
}

const newGridButton = document.querySelector("button#new-grid")
const clearButton = document.querySelector("button#clear")
const normalModeButton = document.querySelector("button#normal-mode")
normalModeButton.disabled = true;
const randomModeButton = document.querySelector("button#random-mode")

newGridButton.addEventListener("click", promptNewGrid)
clearButton.addEventListener("click", clearGrid)
normalModeButton.addEventListener("click", (e) => {e.target.disabled = true; randomModeButton.disabled = false; usingRandomColor = false; clearGrid()})
randomModeButton.addEventListener("click", (e) => {e.target.disabled = true; normalModeButton.disabled = false; usingRandomColor = true; clearGrid()})

generateGrid(gridDefaultSize);

