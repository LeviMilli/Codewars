# Task
# You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

# Examples
# [7, 1]  =>  [1, 7]
# [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
# [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]


def sort_array(source_array):
    odd = sorted([num for num in source_array if num % 2 != 0])
    sorted_arr = [num if num % 2 == 0 else odd.pop(0) for num in source_array]
    return sorted_arr


# so fo rthis propblem we really utilize our for loops and the extent at which we can change a lot of things.
# first we wanted to create a sorted array of all of our odd numbers, we'll be combining that with our even numbers through another for loop
# after we have all our odd numbers using our % 2 !== 2, we can then add them to our answer array.
# we add our num to the for loop if it is even, else we use pop(0) to pop off the first index and continue on.
# this leaves all our even numbers in the same position and replaces the odds with a sorted corresponding value.
