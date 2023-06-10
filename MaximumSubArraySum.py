# The maximum sum subarray problem consists in finding the maximum sum of a contiguous subsequence in an array or list of integers:

# max_sequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
# # should be 6: [4, -1, 2, 1]
# Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. If the list is made up of only negative numbers, return 0 instead.

# Empty list is considered to have zero greatest sum. Note that the empty list or array is also a valid sublist/subarray.

def max_sequence(arr):
    current = 0
    max_sum = 0
    
    for num in arr:
        current = max(0, current + num)
        max_sum = max(current, max_sum)
        
    return max_sum

# so essentially in this we are keeping a counter for the max sum. we take whatever is higher in current, whether its 0 or 
# current plus our current num. if it's above 0, we set our current as the new sum, if not, we bascially start over at 0.
# while this is happening we keep a running tab on our overall max with max_sum. our max_sum will alwasy only be the highest amount
# we have achieved so far in the problem or 0 then we return our max_sum.
