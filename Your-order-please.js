
// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""




function order(words){
    var array = words.split(' ');
    var sortedArray = [];
    for(i = 0; i <= array.length; i++) {
      for(j = 0; j < array.length; j++) {
        if(array[j].indexOf(i) >= 0) {
          sortedArray.push(array[j]);
        }
      }
    }
    return sortedArray.join(' ');
  }


//   so first thing is to split the array so we can work with each word individually. then we need to create an array that our answer will be in so we can return that.
// we are going to need 2 for loops. the first is to keep track of the number we will be checking for, ie... 1 2 3 4 so we can put them in order  
// the second one is so we can iterate over all the words. we use j to check each word then index of i to check if it exists in the word. if its there it will give a number
// that is not -1 so we can then push that word to our array. we then need to return our array but the answer is wanted as a string and not an array so we use join()