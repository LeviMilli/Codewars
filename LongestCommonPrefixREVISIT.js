// 14. Longest Common Prefix
// Easy
// 12.9K
// 3.8K
// Companies
// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters.




/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0){
        return ""
    }
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++){
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix == "") return ""
        }
    }
    return prefix
  };
  
  
  

  /*
  ok so an overview of what we are doing here is checking the first two to make sure there is a prefix between them.
  we can then move on if the prefix is less than what the first two return. but first we set the prefix as the first string.
  strs[0] this allows us to check it against the second string using a for loop and nested while loop. 
  the while loop will continuesly run until it reaches 0. when it reaches 0, we know that the prefix exists in the word. 
  otherwise it will return "". we do this but setting the prefix to a substing of itself substring(0, prefix.length-1) this looks
  a little weird at first becaues prefix.length - 1 would just be the last character right? that's correct but substring stops before 
  the number given. ir runs UP TO the index given, meaning it will be one before. so each time we run this it will be one the word will be one less.
  when the the prefix matches a part of the second word we have our answer. the while loop while stop and continue down the for loop, 
  meaning that we will either cut off a few more letters or most likely just return the prefix.
  */