#  1.  The input string will always be lower case but maybe empty.

#  2.  If the character in the string is whitespace then pass over it as if it was an empty seat
# Example
# wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]

def wave(str):
    return [str[:i] + str[i].upper() + str[i+1:] for i in range(len(str)) if str[i].isalpha()]

###

def wave(people):
    answer = []
    if len(people) == 0:
        return answer
        
    for i in range(len(people)):
        if people[i] == " ":
            continue
        splicer = people[:i] + people[i].upper() + people[i + 1:]
        answer.append(splicer)
        
    return answer

# so for this challenge, we use a comprehensive list and splice it together. we can use upper() on the spcific letter
# that we need to splice. we use isalpha in our list comprehension to only use our upper splice on letters and not spaces.