# 35. Search Insert Position
# Easy
# 15.3K
# 671
# Companies
# Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

# You must write an algorithm with O(log n) runtime complexity.

 

# Example 1:

# Input: nums = [1,3,5,6], target = 5
# Output: 2
# Example 2:

# Input: nums = [1,3,5,6], target = 2
# Output: 1
# Example 3:

# Input: nums = [1,3,5,6], target = 7
# Output: 4
 

# Constraints:

# 1 <= nums.length <= 104
# -104 <= nums[i] <= 104
# nums contains distinct values sorted in ascending order.
# -104 <= target <= 104
# Accepted
# 2.6M
# Submissions
# 5.7M
# Acceptance Rate
# 44.9%


class Solution(object):
    def searchInsert(self, nums, target):
        low = 0
        high = len(nums) - 1
        while high >= low:
            mid = (high + low) // 2
            if target < nums[mid]:
                low = mid - 1
            if target > nums[mid]:
                high = mid + 1
            else:
                return mid
        return low
        

# for this challenge we cannot be itterate through the problem, we are trying to avoid the time complexity of O(n).
# for this problem we are going to use O(log n) which is what a binary search. this is a fairly simply binary search converging on our answer or 