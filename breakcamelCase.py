# DESCRIPTION:
# Complete the solution so that the function will break up camel casing, using a space between words.

# Example
# "camelCasing"  =>  "camel Casing"
# "identifier"   =>  "identifier"
# ""             =>  ""



def solution(s):
    if not s:
        return s
    
    result = s[0]
    
    for char in s[1:]:
        if char.isupper():
            result += " " + char
        else:
            result += char
    
    return result

# so for this one we need to check each char after we add the first one. so we can use our for loop in s[1:] with cuts off our 
# first letter and continues on. if the char isupper, we add it plus a space, it its not, we just add it to our answer and keep
# moving.