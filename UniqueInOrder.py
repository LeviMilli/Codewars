# Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

# For example:

# unique_in_order('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
# unique_in_order('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
# unique_in_order([1, 2, 2, 3, 3])   == [1, 2, 3]
# unique_in_order((1, 2, 2, 3, 3))   == [1, 2, 3]

def unique_in_order(sequence):
    unique_items = []
    previous_item = None
    
    for letter in sequence:
        if letter is not previous_item:
            unique_items.append(letter)
            previous_item = letter
            
    return unique_items


# so for this we are just going to keep a running tab on the previous item that we are dealing with to avoid duplicates. so we 
# for loop in our sequence and if letter is not previous item, we set letter and append to unique items iwth letter.