
# Count the number of Duplicates
# Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

# Example
# "abcde" -> 0 # no characters repeats more than once
# "aabbcde" -> 2 # 'a' and 'b'
# "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
# "indivisibility" -> 1 # 'i' occurs six times
# "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
# "aA11" -> 2 # 'a' and '1'
# "ABBA" -> 2 # 'A' and 'B' each occur twice



def duplicate_count(text):
    
    count = {}
    answer = 0
    lower = text.lower()
    
    
    for letter in lower:
        if letter not in count:
            count[letter] = 1
        else:
            count[letter] += 1
            
            
    for num, value in count.items():
        if value > 1:
            answer += 1
                
    return answer    


# so for this problem, we switch everything to lowercase and itterate through it to create a dictionary of items to check. 
# after that we check each value if its more than 1, if it it we add to our answer. then we return our answer