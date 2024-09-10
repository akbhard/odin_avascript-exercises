function sumAll(a,b) {

    if (a < 0 || b < 0){
      return 'ERROR'
    }
    
    let lowVariable, highVariable
  
    if (a < 0 || b < 0 || !Number.isInteger(a) || !Number.isInteger(b)) {
      return 'ERROR'
    } else if (a < b) {
      lowVariable = a
      highVariable = b
    } else if (a > b) {
      highVariable = a
      lowVariable = b
    }
    
  
    let sum = lowVariable  
    while (lowVariable < highVariable) {
  
      lowVariable++
      sum += lowVariable
    }
    return sum
  }
// Do not edit below this line
module.exports = sumAll;
