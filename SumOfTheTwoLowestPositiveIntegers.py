# Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

# For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

# [10, 343445353, 3453445, 3453545353453] should return 3453455.

# ARRAYSFUNDAMENTALS

def sum_two_smallest_numbers(numbers):
    first = min(numbers)
    numbers.remove(first)
    second = min(numbers)
    
    return first + second


#this one is pretty self explanitory. we use min and remove to get the two lowest numbers and add them together