// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

// Notes:

// Only lower case letters will be used (a-z). No punctuation or digits will be included.
// Performance needs to be considered.
// Examples
// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False


function scramble(str1, str2) {
    let hash1 = {};
    let hash2 = {};
    
    
    for (let letter of str1){
      hash1[letter] = hash1[letter] + 1 || 1
      
    }
    
    for (let letter of str2) {
      hash2[letter] = hash2[letter] + 1 || 1
    }
      
    
    for (let char in hash2){
      if (!hash1[char] || hash1[char] < hash2[char]){
        return false
      }
    }
    
    return true
      
    
  }

  


/*
for this problem i solved it with hashmaps. to help with the time complexity, you could also solve this with a single hashmap.
so we created two hashmaps here and checked them against each other. first if whether or not hash1[char] even existed in the hash2 
hashmap. if it doesnt we automatically know its going to be false. the next thing we do is check whether or not the number of the hashmap
characters is lower than the hash2[char] if this is also true, we can safely assume that this is going to to make our problem return a false.

otherwise we just return a true. 
*/