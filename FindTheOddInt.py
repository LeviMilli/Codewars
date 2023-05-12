# Given an array of integers, find the one that appears an odd number of times.

# There will always be only one integer that appears an odd number of times.

# Examples
# [7] should return 7, because it occurs 1 time (which is odd).
# [0] should return 0, because it occurs 1 time (which is odd).
# [1,1,2] should return 2, because it occurs 1 time (which is odd).
# [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
# [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).


def find_it(seq):
    
    count = {}
    
    for num in seq:
        if num not in count:
            count[num] = 1
        else:
            count[num] += 1
                
    for num, value in count.items():
        if value % 2 == 1:
            return num
        

# this is a lot simplier in python to do. we set a count as our dict. then we run a for in loop and set the values similar to a hashmap.
# using "not in" is something thats pretty awesome as well. then we iterate through our dict and check if a value is divisable by 2.. if not
# we return the corresponding key, in this case its num