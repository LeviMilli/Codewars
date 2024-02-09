// 202. Happy Number
// Easy
// Topics
// Companies
// Write an algorithm to determine if a number n is happy.

// A happy number is a number defined by the following process:

// Starting with any positive integer, replace the number by the sum of the squares of its digits.
// Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1.
// Those numbers for which this process ends in 1 are happy.
// Return true if n is a happy number, and false if not.

 

// Example 1:

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false
 

// Constraints:

// 1 <= n <= 231 - 1


/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    let seen = new Set()
    
    while (n !== 1 && !seen.has(n)){
        let answer = 0
        let digits = n.toString().split("")
        for (let i = 0; i < digits.length; i++){
            answer += parseInt(digits[i]) ** 2
        }
        seen.add(n)
        n = answer
        
    }

    return n == 1
};


// for this we run a while loop and keep using our answer until we run across one we've already used or it is 1. 
// if our m is one after our while loop, the number is happy, if not the number is not happy.