// DESCRIPTION:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
// spinWords( "This is a test") => returns "This is a test" 
// spinWords( "This is another test" )=> returns "This is rehtona test"
// STRINGSALGORITHMS
function spinWords(string){
  
    let newStr = string.split(" ")
    for (let i = 0; i < newStr.length; i++){
      if (newStr[i].length >= 5){
      newStr[i] = newStr[i].split('').reverse().join("")
        } 
    } return newStr.join(" ")

  }

  // to manipulate the stings, first we need to turn them into an array. split(" ") does this and split them at each space into an array the length of the amount of words in the string
  // next we need to iterate over the array using a for loop, or a .map() would have worked in this case as well. next is the if statement to only reverse words with 5 or more characters
  // then with our if statement we can use split again .split(""). <== this time no space to split the letters individually. then we can use reverse() and join("") joining back the reversed 
  // then once we have reversed all words in the array that we need to. we need to convert it back to a string using .join(" ") once more. return this value and the kata is done.