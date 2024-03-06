// 344. Reverse String
// Solved
// Easy
// Topics
// Companies
// Hint
// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

 

// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]
 

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.


/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0
    let end = s.length - 1

    while (start <= end){
        [s[start], s[end]] = [s[end], s[start]]
        start++
        end--

        }
        return s
};


// of course for javascript we could use a .reverse() in this situation and achieve our O(n) but for the sake of challenge 
// we'll do something a little different.

// for this we use a while loop. having a start and an end to use. we deconstruct our arrays so we can use a temporary placeholder 
// for each variable. we then use our start and end indicies and swap the beginning and the end. this will continue on 0(n) time
