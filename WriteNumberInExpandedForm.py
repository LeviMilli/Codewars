# Write Number in Expanded Form
# You will be given a number and you will need to return it as a string in Expanded Form. For example:

# expanded_form(12) # Should return '10 + 2'
# expanded_form(42) # Should return '40 + 2'
# expanded_form(70304) # Should return '70000 + 300 + 4'
# NOTE: All numbers will be whole numbers greater than 0.

# If you liked this kata, check out part 2!!






def expanded_form(num):
    num_str = str(num)
    length = len(num_str)
    answer = []

    for i, digit in enumerate(num_str):
        if int(digit) != 0:
            answer.append(digit + "0" * (length - 1 - i))

    return ' + '.join(answer)

# so for this one we need to itterate through using enumerate. if the current digit is not 0, we know we need to add zeros based 
# on the rest of the lenth that we have. after we have added all our numbers witht he correct amound of 0's, then we can use
# join to add them all together with the + and the spaces that we need to use
