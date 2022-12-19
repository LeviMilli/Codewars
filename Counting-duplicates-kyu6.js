// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

// STRINGS

function duplicateCount(text){
    let textLower = text.toLowerCase()
    let textSplit = textLower.split("")
    let textHash = {}
    let count = 0
    
  //   if(!text){
  //     return 0
  //   }
    for (const letter of textSplit){
      textHash[letter] = textHash[letter] + 1 || 1
    }
  
    for (const i of Object.values(textHash)){
      if(i > 1){
        count++
      } 
      
    }
    return count
    //...
  }


/*I've recently been spending some time learning hashmaps so i wanted to solve this kata using one of those. 
We first need to lowercase and split the string so we can itterate over it and put it in a map to use for later.
Each key has a value that keeps track of how many times it has occured. At the end we itterate over the object and 
keep a count of how many were over 1, meaning a duplicate, then return count.

*/