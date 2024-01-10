# ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

# Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

# Please note that using encode is considered cheating.




def rot13(message):
    norm = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    rot13 = "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm"
    
    answer = ""
    for letter in message:
        if letter.isalpha():
            index = norm.index(letter)
            answer += rot13[index]
        else:
            answer += letter
            
    return answer



# for this one... we just want to push everything over to our answer string. so we do that by replacing itterating over our message,
# then checking if its alpha, if it is we get the index of our norm and use that to add the index of our rot13 to our answer.
# if it doesnt pass our isalpha() check, we just push whatever letter or space on through to our answer.