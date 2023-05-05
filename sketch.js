const canvasData = {
  width: 1820,
  height: 980,
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

// sleep function to enable the animation/visualisation
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
