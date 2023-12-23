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
        print(nums)
        if target in nums:
            return nums.index(target)
        answer = len(nums)
        for i, num in enumerate(nums):
            if target <= num:
                answer = i
                break
        return answer
            
        

# for this challenge we need to first check if our target is in our nums, we can return the index of that if its found.
# if its not found we need to search for where it goes. we can set our answer to the length of our nums to handle the case where 
# it goes at the end. then we itterate through setting our answer to i if our target is less than our current num,
# once it is not we will then know that our previous index is our answer, or the original index we set.