function removeFromArray(array, ...arg) {
  
    let newArray = []
    
    for (let g in array) {
      if (!arg.includes(array[g])) {
        newArray.push(array[g])
      }
    }
    
    return newArray
  }
// Do not edit below this line
module.exports = removeFromArray;
