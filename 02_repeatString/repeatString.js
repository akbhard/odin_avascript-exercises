function repeatString(string,num) {
  
    if (num < 0) {
        return 'ERROR'
    }
    
    let i = 0
    
    let result = ''
    
    while (i < num) {
          result += string
          i++;
      }
    
    return result
  }
  

// Do not edit below this line
module.exports = repeatString;
