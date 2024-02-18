// 108. Convert Sorted Array to Binary Search Tree
// Attempted
// Easy
// Topics
// Companies
// Given an integer array nums where the elements are sorted in ascending order, convert it to a 
// height-balanced
//  binary search tree.

 

// Example 1:


// Input: nums = [-10,-3,0,5,9]
// Output: [0,-3,9,-10,null,5]
// Explanation: [0,-10,5,null,-3,null,9] is also accepted:

// Example 2:


// Input: nums = [1,3]
// Output: [3,1]
// Explanation: [1,null,3] and [3,1] are both height-balanced BSTs.

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */


var sortedArrayToBST = function(nums) {
    if (nums.length === 0){
        return null
    }

    const mid = Math.floor(nums.length / 2)

    let root = new TreeNode(nums[mid])

    root.left = sortedArrayToBST(nums.slice(0, mid))
    root.right = sortedArrayToBST(nums.slice(mid + 1))

    return root

};


// for this problem we know that the nums we are getting is already sorted in ascending order. to create a binary
// search tree out of this we need to grab the middle using math.floor. once we have a mid we can use our treenode function 
// to recursively set our node, starting with our mid and setting our left and right to null. we can then use recursion like most 
// ways you transfer data to a linked list. return root and answer 