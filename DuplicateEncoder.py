
# The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

# Examples
# "din"      =>  "((("
# "recede"   =>  "()()()"
# "Success"  =>  ")())())"
# "(( @"     =>  "))((" 
# Notes
# Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!






def duplicate_encode(word):
    
    print(word)
 
    neword = word.lower()
    encode = ""
    
    for letter in neword:
        if word.count(letter) > 1:
            encode += ")"
        else:
            encode += "("
            
    return encode
    
    
    

def duplicate_encode(word):
    word = word.lower()  # Convert the word to lowercase for case-insensitive comparison
    
    encode = {}
    
    for letter in word:
        if letter in encode:
            encode[letter] += 1
        else:
            encode[letter] = 1
    
    encoded_string = ""
    
    for letter in word:
        if encode[letter] > 1:
            encoded_string += ")"
        else:
            encoded_string += "("
    
    return encoded_string



# for this we need to check the count of each letter. So we create a dict or we can use .count. .count is easier but both
# are relavant. so we create a for loop and itterate over our word checking if the neword.count(letter) is greater than 1.
# if it is, we add ), if not we add (.

#then return encode or encoded_string