// 374. Guess Number Higher or Lower
// Solved
// Easy
// Topics
// Companies
// We are playing the Guess Game. The game is as follows:

// I pick a number from 1 to n. You have to guess which number I picked.

// Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

// You call a pre-defined API int guess(int num), which returns three possible results:

// -1: Your guess is higher than the number I picked (i.e. num > pick).
// 1: Your guess is lower than the number I picked (i.e. num < pick).
// 0: your guess is equal to the number I picked (i.e. num == pick).
// Return the number that I picked.

 

// Example 1:

// Input: n = 10, pick = 6
// Output: 6
// Example 2:

// Input: n = 1, pick = 1
// Output: 1
// Example 3:

// Input: n = 2, pick = 1
// Output: 1
 

// Constraints:

// 1 <= n <= 231 - 1
// 1 <= pick <= n


/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */


var guessNumber = function(n) {
    let lowRange = 1;
    let highRange = n;
    while (lowRange <= highRange) {
        let middle = Math.floor((lowRange + highRange) / 2);
        let check = guess(middle);
        if (check === 0) {
            return middle;
        } else if (check === 1) {
            lowRange = middle + 1;
        } else {
            highRange = middle - 1;
        }
    }
    return -1; // Error case
};



// for this problem we are using a binary search tree to solve the problem, setting our high and low ranges and change them
// to the middle + or minus 1.