// Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character. 

// The function should return true if the first string includes the character, otherwise it should return false.

// Do not use the built in String.includes() function!


function stringIncludes(str1, strChar){

    str1 = str1.toLowerCase();
    strChar = strChar.toLowerCase();

    for (let value of str1){
        
      if(value === strChar){
         return true;
      }
     
    }
      return false;
  }
  
  stringIncludes("hello", "H")