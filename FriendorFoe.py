# Make a program that filters a list of strings and returns a list with only your friends name in it.

# If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

# Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

# i.e.

# friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
# Note: keep the original order of the names in the output.


def friend(x):
    answer = []
    for word in x:
        if len(word) == 4:
            answer.append(word)
    return answer

def friend(x):
    return [f for f in x if len(x) ==4]
        
    
# so there's a few ways to do this. first is just a simple for loop and add the word to our answer if it has a len() of 4
# the other way to do this is using a list comprehension. its bascially the same thing as creating a for loop but written in 
# a way that is much more condensed down.