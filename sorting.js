

class Sorting {
    constructor(arraySize) {

        this.length = arraySize
        this.unsortedArray = new Array(this.length)
        
        for (let i = 0; i < this.length; i++) {
            this.unsortedArray[i] = new Item(canvasData.width/this.length * i, this)
        }
    }

    show() {
        for (let item of this.unsortedArray) {
            item.show()
        }
    }

    async selectionSort() {
        let arr = this.unsortedArray
        let currentItem, smallest

        for (let i = 0; i < arr.length - 1; i++){
            
            let minIndex = i
            
            for (let j = i + 1 ; j < arr.length; j++) {

                if(arr[j].height < arr[minIndex].height) {
                    minIndex = j
                    
                }
            }

            await sleep(10)
                
            arr[minIndex].color = {
                red: 0,
                green: 150,
                blue: 50
            }

            currentItem = arr[i]
            smallest = arr[minIndex]

            // change the x positions 
            currentItem.x = smallest.x
            smallest.x = i * canvasData.width/arr.length

            // swap the two items
            arr[i] = smallest
            arr[minIndex] = currentItem
            
            
        }

        this.unsortedArray[this.length-1].color = {
            red: 0,
            green: 150,
            blue: 50
        }
    }
}