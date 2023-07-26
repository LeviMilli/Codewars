# The museum of incredible dull things
# The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

# However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

# Task
# Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

# Don't change the order of the elements that are left.

# Examples
# * Input: [1,2,3,4,5], output = [2,3,4,5]
# * Input: [5,3,2,1,4], output = [5,3,2,4]
# * Input: [2,2,1,2,1], output = [2,2,2,1]


def remove_smallest(numbers):
#     raise NotImplementedError("TODO: remove_smallest")
    if  not numbers:
        return []
    lowest = min(numbers)
    new = numbers.copy()
    new.remove(lowest)
    
    return new


#this is also a very clever itteration of this problem
def remove_smallest(numbers):
    a = numbers[:]
    if a:
        a.remove(min(a))
    return a



# so in this we need to reuturn an empty array if given an empty array. we first need to find the lowest number our array.
# we can do this by using min on our numbers. then we also need to return a new array and not modify the original one.
# copy is great for this. then we remove the lower from our new array and return our modified new array.


