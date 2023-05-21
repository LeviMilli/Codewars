# You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

# Examples
# [2, 4, 0, 100, 4, 11, 2602, 36]
# Should return: 11 (the only odd number)

# [160, 3, 1719, 19, 11, 13, -21]
# Should return: 160 (the only even number)


def find_outlier(integers):
    odd_count = 0
    last_odd = 0
    even_count = 0
    last_even = 0
    
    
    for num in integers: 
        if num % 2 == 0:
            last_even = num
            even_count += 1
        if num % 2 == 1:
            last_odd = num
            odd_count += 1
            
    if odd_count > 1 and even_count == 1:
        return last_even
    else:
        return last_odd
        
    
    
# so we need to keep a count of the last seen even and odd an the total count of both. afterwards we check the values of 
# our even and odd count varibles and return the corresponding last even or odd


