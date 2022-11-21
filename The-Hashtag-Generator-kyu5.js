// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
// Examples
// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false


function generateHashtag (str) {
    console.log(str)
      if (str.trim() == ""){
        return false
      } 
      let newStr = str
                .split(" ")
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join("")
      
    let newStrHash = `#${newStr.trim()}`
    
    return newStrHash.length > 140 ? false : newStrHash
    }


    // First thing is to make sure its not an empty string. Use trim to remove excess whitespace around word. if its an empty string this will only leave "" then return false.
    // Next make our string into array so we can modify it before changing it back to a string. split() does then, then map over the array and and grab the first character of 
    // each word and capitalize it. After that combine it with the rest of the word to form the same word with first letter capitolized.
    // next is to join our array back together to from a hashtag. but first we need to trim the excess white space becuase we only did that as a condition with the if statement 
    // and didnt actually modify anything, only checking true or false. 
    // finally we have a condition check, as long as the end result is 140 or less we can return it, otherwise it will be false. We use a ternary operator here to return false if its true 
    // otherwise we return the the new modified hashtag.