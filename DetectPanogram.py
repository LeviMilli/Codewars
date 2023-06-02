# A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence 
# "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

# Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


def is_pangram(s):
    alpha = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    
    newS = " ".join(letter.lower() for letter in s if letter.isalpha() )
    
    for letter in alpha:
        if letter not in newS:
            return False
    return True        
    
    
 

 # so for this we are going to itterate though our alphabet and check whether that letter is not in our new s argument.
 # our s argument needs to be lowecase. then if letter is not in newS. we can return false. otherwise return true