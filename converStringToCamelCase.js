// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

// Examples

// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"




function toCamelCase(str){
    if (str.length === 0) {
      return str
    }
    console.log(str)
  let split = str.split(/_|-/)
  for (let i = 1; i < split.length; i++) {
    split[i] = split[i].charAt(0).toUpperCase() + split[i].slice(1)
  }
   return split.join("")
  }


// no for loop

function toCamelCase(str){
    return str.split(/-|_/g).map((w, i) => (i > 0 ? w.charAt(0).toUpperCase() : w.charAt(0)) + w.slice(1)).join('');
  }



  /*
  first we need to check to see if the string is empty, if it is then we just return the string back
  I did a for loop here but it can be done with regex and map as well. 
  first we split the str so we can iterate over each word and grab the first letter with charAt and uppercase it.
  we then combine it with the rest of the string and replae that verison of split[i] with it then return the joined string.
  */