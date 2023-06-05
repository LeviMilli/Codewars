# Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

# move_zeros([1, 0, 1, 2, 0, 1, 3]) # returns [1, 1, 2, 1, 3, 0, 0]

def move_zeros(lst):
    new_list = lst
    for num in lst:
        if num == 0:
            new_list.remove(0)
            new_list.append(0)
            
    return new_list
        

# we are going to use a for loop here. if num is 0 we remove and append 0. this will grab the first 0 it finds in the list, remove it
# then append it to the end. return new list