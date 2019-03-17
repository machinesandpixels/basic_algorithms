// Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

// Do not use the built in repeat method

function repeat(str,num){
  
    let newStr="";
    for (let i = 0; i < num; i++){
     
      newStr += str;
      
    }
    return newStr;
    
  }
  
  repeat("A",5);