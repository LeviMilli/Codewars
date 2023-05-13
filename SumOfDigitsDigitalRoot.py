# Digital root is the recursive sum of all the digits in a number.

# Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

# Examples
#     16  -->  1 + 6 = 7
#    942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
# 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
# 493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2



def digital_root(n):
    while n > 9:
        n = sum(int(i) for i in str(n))
    return n  
    
    


# so this is a fun problem. python makes this much simplier than other languages. we could use an if statement or a while statement 
# to start this off with. if n < 10 and just return n. we reset n's value to the sum of our for loop. 
# we can't itterate over intergers so we use str(n) in our for loop and change it back to an int using int(i) for our sum. then return n