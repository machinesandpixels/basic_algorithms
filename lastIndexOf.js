// Write a function called lastIndexOf, which accepts an array and a number.

// The function should return the last index at which the value exists, or -1 if the value is not found.

// Do not use the built in Array.lastIndexOf() function!


function lastIndexOf(arr, num){

    for (let i = arr.length; i > 0; i--){
      if (num === arr[i]){
        return i;
      }
    }
    return -1;
  }

// lastIndexOf([1, 2, 3, 2], 2)