// 387. First Unique Character in a String
// Easy
// 7.6K
// 254
// Companies
// Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabb"
// Output: -1
 

// Constraints:

// 1 <= s.length <= 105
// s consists of only lowercase English letters.
// Accepted
// 1.4M
// Submissions
// 2.3M
// Acceptance Rate
// 59.6%


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    console.log(s.lastIndexOf())
    
    for (let i = 0; i < s.length; i++){
        if (s.indexOf(s[i]) == s.lastIndexOf(s[i])){
            return i
        }
    } return -1
    
        
    };


/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    let hash = {}
  
    for (let letter of s){
      hash[letter] = hash[letter] + 1 || 1
    }
    console.log(hash)
    for (let key in hash){
      if (hash[key] == 1){
        return s.indexOf(key)
      } 
    } return -1
  
      
  };



  /*
  so there are a couple ways to do this that I know of. The tried and true use a hashmap meme! and of course matching
  indexOf() to the lastIndexOf() if this matches then we can return i, else return -1 no matter what.

  the other way is to do a hashmap and and then itterate through it to find the first key that has a value of 1. if no
  value of 1, then return -1

  gg's
  */