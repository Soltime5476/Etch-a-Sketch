const container = document.querySelector("#container")
const squareNum = 16
for (let i = 0; i < squareNum; i++) {
  for (let j = 0; j < squareNum; j++) {
    const element = document.createElement("div")
    element.className = "grid"
    element.id = `square${i}-${j}`
    container.appendChild(element)
  }
}