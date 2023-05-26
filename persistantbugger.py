# Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

# For example (Input --> Output):

# 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
# 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
# 4 --> 0 (because 4 is already a one-digit number)


def persistence(n):
    if n < 10:
        return 0
    
    print(n)
    
    num_str = str(n)
    
    count = 0
    
    while len(num_str) > 1:
        product = 1
        
        for digit in num_str:
            product *= int(digit)
            
        num_str = str(product)
        count += 1
        
    return count
        
        
    
    
    # your code

# for this problem we need to get how many itterations it will take us to get to a single digit. if n is already a single digit,
# we can return 0. otherwise, we will need to create a while loop that continues while our num_str length is greater than 1.
#  we convert our num to a string so we can itterate over them individually. so in our for loop we take each digit and times it 
#  by product and itself using a *= simialr to how += works. we then set our new num_str to this product varible and our while loop
# will check its length again. since our count is outside the scope of our while loop, it continues to count, then we can return our 
#  count when our num_str length is 1.