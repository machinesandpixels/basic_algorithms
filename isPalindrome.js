// Is Palindrome?
// A palindrome is a word that reads the same forward as backward. For example:

// wow
// noon
// racecar
// tacocat

// Write a function that returns true if an input word is a palindrome and false if not.


function isPalindrome(word){
    
    let letters = word.split("");
    
    while (letters.length > 1){
        
        if (letters.shift() !== letters.pop()){
          return false;
        }
    }

    return true;
}

let test = "tacocat";
isPalindrome(test)