# There is an array with some numbers. All numbers are equal except for one. Try to find it!

# find_uniq([ 1, 1, 1, 2, 1, 1 ]) == 2
# find_uniq([ 0, 0, 0.55, 0, 0 ]) == 0.55
# It’s guaranteed that array contains at least 3 numbers.

# The tests contain some very huge arrays, so think about performance.

# This is the first kata in series:

# Find the unique number (this kata)
# Find the unique string
# Find The Unique

def find_uniq(arr):
    if arr[0] != arr[1] and arr[0] != arr[2]:
        return arr[0]
    else:
        return next(num for num in arr if num != arr[0])


# so for this problem we are checking to see if the first number is not the same as the second and third. if its different
# we know that its going to be our unique number. if its the same as one of them, then we know its the common number to check against.
# we then use next() and a for loop that is looking for a number that is different than our original number, then we will know 
# that is the unique number.