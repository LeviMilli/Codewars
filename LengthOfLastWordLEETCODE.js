// 58. Length of Last Word
// Easy
// 2.9K
// 151
// Companies
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal 
// substring
//  consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let splitter = s.trim().split(" ")
    let last = splitter[splitter.length - 1]
    return last.length
};


var lengthOfLastWord = function(s) {
    let trimmedString = s.trim();
    
    return trimmedString.length - trimmedString.lastIndexOf(' ') - 1;
};


/*
So this problem is super straightforward. All we are doing is a using a few methods. The first being trim. 
This removes the extra space between words and at the end of the words. That way we can use split(" ") and turn it
into an array. After that we just need to return the lenght of the last spot in the array. we can do this by
returning splitter[splitter.length - 1].length

ez pz
*/

