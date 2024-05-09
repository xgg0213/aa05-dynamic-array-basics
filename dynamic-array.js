class DynamicArray {

  constructor(defaultSize=4) {

    // Your code here 
      this.length = 0
      this.capacity = defaultSize
      this.data = new Array(defaultSize)

  }

  read(index) {
    return this.data[index];
  }

  unshift(val) {
    // Your code here 
    // shift every value to the right
    for (let i = this.data.length; i >0; i--) { // better to start from the back
      this.data[i] = this.data[i-1];
    }
    // add something to the array
    this.length++;
    this.data[0] = val;
  }

}


module.exports = DynamicArray;
