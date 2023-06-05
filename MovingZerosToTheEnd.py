# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

def move_zeros(lst):
    new_list = lst
    for num in lst:
        if num == 0:
            new_list.remove(0)
            new_list.append(0)
            
    return new_list

def move_zeros(arr):
    l = [i for i in arr if isinstance(i, bool) or i!=0]
    return l+[0]*(len(arr)-len(l))
        

# we are going to use a for loop here. if num is 0 we remove and append 0. this will grab the first 0 it finds in the list, remove it
# then append it to the end. return new list

# the second problem here is actually really cool. we use isinstance to check if i is bool, 0 returns false and the or is != 0
# then we can easily just append the amount of 0's we need to the end by l + 0 times our arr - l lengths.