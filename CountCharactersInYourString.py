# The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

# What if the string is empty? Then the result should be empty object literal, {}.

def count(s):
    dicttime = {}
    print(s)
    if len(s) == 0:
        return dicttime
    for letter in s:
        if letter not in dicttime:
            dicttime[letter] = 1
        elif letter in dicttime:
            dicttime[letter] += 1
    return dicttime

def count(string):
  
    return {i: string.count(i) for i in string}

# here we are creating a basic hashmap. if the letter doesnt exist, add one. If it exists, add one to the letter that exists.