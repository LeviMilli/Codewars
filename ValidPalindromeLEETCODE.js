// 125. Valid Palindrome
// Easy
// 6.3K
// 6.8K
// Companies
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

 

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
 

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.
// Accepted
// 1.9M
// Submissions
// 4.2M
// Acceptance Rate
// 44.3%

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s == ""){
        return true
    }
    let justLetters = s.replace(/[^0-9a-zA-Z]/gi, '').toLowerCase();
   
    let check = justLetters.split("").reverse().join("")
    
    if (justLetters == check) {
        return true
    } else return false
};


/*
This is a pretty common problem except for the fact that we are dealing with special characters. In this case we
need to replace the special characters with nothing. With the use of a regex we can use the replace() method and accomplish this
pretty easy. Then as you would normally do a palindrome, we split reverse join and check against the original value.
*/