// 70. Climbing Stairs
// Easy
// 18K
// 565
// Companies
// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

 

// Example 1:

// Input: n = 2
// Output: 2
// Explanation: There are two ways to climb to the top.
// 1. 1 step + 1 step
// 2. 2 steps
// Example 2:

// Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {

    if (n <= 2) {
      return n;
    }
    let dp = [];
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2];
    }
    return dp[n];
  
  
  };


  /*
  in this problem we are solving for a ever increasing set of options. we can use the fibonacci recursion here as well but that leads to 
  an O(2^n). where as a dynamic apporoach like the one we did is O(n).
  
  so we can just return dp[n] after we write out our for loop that takes n.
  */