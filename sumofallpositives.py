# You get an array of numbers, return the sum of all of the positives ones.

# Example [1,-4,7,12] => 1 + 7 + 12 = 20

# Note: if there is nothing to sum, the sum is default to 0.

def positive_sum(arr):
    if not arr:
        return 0
    
    answer = 0
    print(arr)
    for num in arr:
        if num > 0:
            answer += num
    return 

# sum psotive numbers together using two if statements. one to check if its 
# empty, the other to make sure num is greater tahn 0