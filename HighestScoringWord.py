
# Given a string of words, you need to find the highest scoring word.

# Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

# For example, the score of abad is 8 (1 + 2 + 1 + 4).

# You need to return the highest scoring word as a string.

# If two words score the same, return the word that appears earliest in the original string.

# All letters will be lowercase and all inputs will be valid.



def high(x):
    alphabitty = 'abcdefghijklmnopqrstuvwxyz'
    answer = ""
    score = 0 
    splitty = x.split(" ")
    
    for word in splitty:
        counter = 0
        for letter in word:
            counter += (alphabitty.index(letter) + 1)
        if counter > score:
            score = counter
            answer = word
            
    return answer


def high(x):
    words=x.split(' ')
    list = []
    for i in words:
        scores = [sum([ord(char) - 96 for char in i])]
        list.append(scores)
    return words[list.index(max(list))]

# hey so for this on we need to get the scores and get the highest one and return it based on the index of our scores that
# match the index of our word.


        
        