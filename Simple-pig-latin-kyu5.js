// DESCRIPTION:
// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

// Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !



// mine 
function pigIt(str){
    let arr = str.split(" ")
    let newArr = []
    for (i = 0; i < arr.length; i++){
      if (arr[i].includes("!") || arr[i].includes("?")){
          newArr.push(arr[i])
          } else {
      newArr.push(arr[i].slice(1) + arr[i].slice(0,1) + "ay")
            }
    }
    
    
   
      
     return newArr.join(" ")
    

  }

  // clever


  function pigIt(str) {
    var arrayWord = str.split(' ');
    return arrayWord.map(function(word) {
      var firstLetter = word.charAt(0);
      return word.slice(1) + firstLetter + 'ay';
    }).join(' ');
  }





  // The first thing that needs to be done, as with most string manipulation, is to make it an array. After that array methods can we used. The frist thing to do here is to split the string.
  // we need to grab the value of the first letter and splice the rest. joining it together with the spliced word and adding ay to create a pig latin phrase..