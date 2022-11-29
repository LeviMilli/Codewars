// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!


function dup(s) {
  
    return s.map(function(str){
      return str
        .split("")
        .filter((letter, index, array) => letter !== array[index + 1])
        .join("");
      })
    
  //..
  };


  // so what we did here was use a map to itterate over each string in the array and return a manipulted index of each. first thing to do for each string in the array is to 
  //split each into another array so we can easily manipulate the data. next we filter out the the letters using all three of the parameters that filter has. 
  //We need to return a letter only if the next letter only if the next letter in the array is not the same as the one we are filter. This can be accomplished by using 
  // the element parameter and checking to make sure it is not equal to the next value in the array using index and array. Then we join everything back to a string and return the value.
  // Easy Peezee