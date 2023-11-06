# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

# Additionally, if the number is negative, return 0.

# Note: If the number is a multiple of both 3 and 5, only count it once.

# Courtesy of projecteuler.net (Problem 1)

def solution(number):
    count = 0
    sum = 0
    while count < number:
        if count % 3 == 0 or count % 5 == 0:
            sum += count
        count += 1
    return sum
    
  
  # in this problem we need to count from 0 up to number and add each name that is divisible by 3 or 5 to our sum. we can use a while loop
  # here and count++ each time.