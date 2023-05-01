const canvasData = {
  width: 1200,
  height: 800,
  color: 55
}

let sortingObj
let sortBtn

function setup() {
  createCanvas(canvasData.width, canvasData.height);
  sortingObj = new Sorting(500)
}

function draw() {
  background(canvasData.color);
  sortingObj.show()
}

function keyPressed() {
  switch (key) {
    case ' ':
      sortingObj.selectionSort()
      break
  }
}
