# Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

# Examples
# pig_it('Pig latin is cool') # igPay atinlay siay oolcay
# pig_it('Hello world !')     # elloHay orldway !


def pig_it(text):
    
    apart = text.split(" ")
    answer = ""
    for letter in apart:
        if letter.isalpha():
            thing = letter[1:] + letter[0] + "ay" + " "
            answer += thing
        else:
            answer += letter
        
    return answer.strip()

def pig_it(text):
    return " ".join([ word[1:] + word[0] + "ay" if word.isalpha() else word for word in text.split(" ")])


# for this we need to split our text into words so we can itterate over it. then join it back together one by one using our 
# for loop. we take our word and join if isalpha is true else just return the word for special characters.


