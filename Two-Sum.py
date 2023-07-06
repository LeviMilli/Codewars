# Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

# For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

# The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

# Based on: http://oj.leetcode.com/problems/two-sum/

# two_sum([1, 2, 3], 4) # returns [0, 2] or [2, 0]


def two_sum(numbers, target):
    seen = {}
    for i, num in enumerate(numbers):
        comp = target - num
        
        if comp in seen:
            return [seen[comp], i]
        
        seen[num] = i
    return []
        
        
# so for this one we need to create a dict and use that to keep track of our comp. our comp being the current num - target. 
# what we are keeping track of is another number that matches our comp in seen, becuase if it does, that means the two numbers together will
# equal our target. so each time we itterate we put num in seen with its index because we will need the index later. since we are putting
# num in seen, we can check the difference of our current num against target. if we find a match, return comp and our current index