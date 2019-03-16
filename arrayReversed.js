// Write a function called reverse, which accepts an array and returns the same array with all of the values reversed. In other words, do not solve this by creating a new array.

// Note: returning the same array is called an in-place operation, since no additional space is used. 
// https://en.wikipedia.org/wiki/In-place_algorithm 

// Do not use the built in Array.reverse() function!


function reverse(arr){

    for (let i = 0; i < arr.length -1; i++) {
      
      let removed = arr.pop();
      arr.splice(i,0,removed);
      console.log(removed);
    
    }
   
    return arr;
  }
  
  let test = [22,4,5,6];
  reverse(test);
  