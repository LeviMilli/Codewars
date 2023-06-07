# The marketing team is spending way too much time typing in hashtags.
# Let's help them with our own Hashtag Generator!

# Here's the deal:

# It must start with a hashtag (#).
# All words must have their first letter capitalized.
# If the final result is longer than 140 chars it must return false.
# If the input or the result is an empty string it must return false.
# Examples
# " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
# "    Hello     World   "                  =>  "#HelloWorld"
# ""                                        =>  false


def generate_hashtag(s):

    answer = " ".join([word.capitalize() for word in s.split("")]).replace(" ", "")
    
    if len(answer) > 140 or len(answer) == 0:
        return False
    return "#" + answer
    

def generate_hashtag(s):
    ans = '#'+ str(s.title().replace(' ',''))
    return s and not len(ans)>140 and ans or False

def generate_hashtag(s):
    output = "#"
    
    for word in s.split():
        output += word.capitalize()
    
    return False if (len(s) == 0 or len(output) > 140) else output

# so we need to capitalize the first letter of all the words and remove all the whitespace afterwards. we can do this with either a 
# for loop and capitalize or title. then we return the "#" + answer. if the characters are more than 140 or 0, we need to check for that too



