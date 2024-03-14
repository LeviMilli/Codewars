// 283. Move Zeroes
// Solved
// Easy
// Topics
// Companies
// Hint
// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]
 

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1
 

// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0

    for (let right = 0; right < nums.length; right++){
        if(nums[right] != 0){
            let temp = nums[left]
            nums[left] = nums[right]
            nums[right] = temp
            
            left++
        }

    }
};



// for this one we need to have pointers and itterate through our array until we find 0s to swap with. we start with both our 
// right and left at 0 and move through. if right is not 0 we know that we are switching and need to itterate left again. 
// no return we are only manipulating the array that we are given.