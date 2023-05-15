# In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

# Examples
# high_and_low("1 2 3 4 5")  # return "5 1"
# high_and_low("1 2 -3 4 5") # return "5 -3"
# high_and_low("1 9 3 4 -5") # return "9 -5"
# Notes
# All numbers are valid Int32, no need to validate them.
# There will always be at least one number in the input string.
# Output string must be two numbers separated by a single space, and highest number is first.

def high_and_low(numbers):
    split = numbers.split()
    
    list = [int(num) for num in split]
    
    highest = max(list)
    lowest = min(list)
    
    
    return str(highest) + " " + str(lowest) 


# so the initial input we get here is numbers in string format seperated by spaces. so we need to split the input. then we
#  need to run a for loop for each number and turn it into an integer  then we can use our min max methods.
# we can then turn those answers back into strings using str and + " " 
# easy as that 