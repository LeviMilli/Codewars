# Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

# Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

# Requirements
# You can assume you will be given an integer input.
# You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
# NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.
# Example
# is_prime(1)  /* false */
# is_prime(2)  /* true  */
# is_prime(-1) /* false */


import math
def is_prime(num):
    print(num)
    if num < 2:
        return False
    for i in range(2, int(math.sqrt(num)) + 1):
        if num % i == 0:
            return False
    return True
    
    
    
# so for this problem, we need to run through a range of numbers and use a modulus to check if i % num is 0. if it is, we know
# that our number can't be prime. we do this becuase for a number to be prime, there has to be at least one number that
# its divisible by under the square root of the number.