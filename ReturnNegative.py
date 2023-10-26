# In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

# Examples
# make_negative(1);  # return -1
# make_negative(-5); # return -5
# make_negative(0);  # return 0
# Notes
# The number can be negative already, in which case no change is required.
# Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

def make_negative( number ):
    print(number)
    return number if number < 1 else number*-1

def make_negative(num):
    return -abs(num)


# here we are using a simple ternary operator type of return. return number if number is less than 1, else we need to return the number
#  the second one here uses the abs() function which is absolute, returning the number as a positive number and reassigning it as a negative