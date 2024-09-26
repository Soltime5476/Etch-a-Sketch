function getRandomColor() {
  let hexStr = "#"
  for (let i = 0; i < 6; i++) {
    hexStr += Math.floor(Math.random() * 16).toString(16);
  }
  return hexStr
}

function mouseEnterCallback(event) {
  const grid = event.target
  grid.style.backgroundColor = getRandomColor()
}

function mouseLeaveCallback(event) {

}

function generateGrid(gridSize) {
  const container = document.querySelector("#container")
  for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
      const element = document.createElement("div")
      element.className = "grid"
      element.id = `square${i}-${j}`
      element.addEventListener("mouseenter", mouseEnterCallback)
      element.addEventListener("mouseleave", mouseLeaveCallback)
      container.appendChild(element)
    }
  }
}

const gridDefaultSize = 16
generateGrid(gridDefaultSize);

