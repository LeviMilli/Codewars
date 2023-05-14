# Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

# Note: a and b are not ordered!

# Examples (a, b) --> output (explanation)
# (1, 0) --> 1 (1 + 0 = 1)
# (1, 2) --> 3 (1 + 2 = 3)
# (0, 1) --> 1 (0 + 1 = 1)
# (1, 1) --> 1 (1 since both are same)
# (-1, 0) --> -1 (-1 + 0 = -1)
# (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
# Your function should only return a number, not the explanation about how you get that number.

def get_sum(a,b):
    if a == b:
        return a
    else: 
        start = min(a, b)
        end = max(a, b)
        return sum(range(start, end + 1))
    
    #good luck!


# so if a and b are equal, we return one. Then we need to use a range to count the numbers from a to b or b to a.
# we use min and max to start our start and end. then return the sum of all our range numbers. make sure to add end + 1
# becuase the second number in range is only UPTO so its its essetially like : current number <  end.