// 219. Contains Duplicate II
// Easy
// Topics
// Companies
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

 

// Example 1:

// Input: nums = [1,2,3,1], k = 3
// Output: true
// Example 2:

// Input: nums = [1,0,1,1], k = 1
// Output: true
// Example 3:

// Input: nums = [1,2,3,1,2,3], k = 2
// Output: false
 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109
// 0 <= k <= 105

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    let seen = new Map()

    for (let i = 0; i < nums.length; i++){
        if (seen.has(nums[i]) && i - seen.get(nums[i]) <= k ){
            return true
        }
        seen.set(nums[i], i)
    }
    
    return false

};




// we create a new and use a for loop to itterate through the use of our indicies. if our current num[i] is present in the map, 
// and our distance from the last it was entered is less than k, we can return true, otherwise we need to update our map 
// and set the the current number with its indices. 
