// 9. Palindrome Number
// Easy
// 8.7K
// 2.4K
// Companies
// Given an integer x, return true if x is a 
// palindrome
// , and false otherwise.

 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

// Constraints:

// -231 <= x <= 231 - 1
 

// Follow up: Could you solve it without converting the integer to a string?
// Accepted
// 2.9M
// Submissions
// 5.4M
// Acceptance Rate
// 53.3%
// Seen this question in a real interview before?
// 1/4
// Yes
// No
// Similar Questions
// Related Topics
// Copyright ©️ 2023 L


/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    let check = x.toString().split("").reverse().join("")
    console.log(check)
    if (+check === x){
        return true
    } else {
        return false
    }


};