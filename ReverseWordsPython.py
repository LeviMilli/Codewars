# Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

# Examples
# "This is an example!" ==> "sihT si na !elpmaxe"
# "double  spaces"      ==> "elbuod  secaps"

def reverse_words(text):
    words = text.split(" ")
    
    reversed_words = [word[::-1] for word in words]
    return " ".join(reversed_words)
    
    
  #go for it


# so for this problem, its the same as javacript but the syntax is quite a bit different. split is the same. but using a for in loop
# is different. the code to execute comes before our for in loop. word[::-1] is a reversal of the word as well. so we just place that
# the syntax of this makes sense if you think about it, but coming from another language, its going to toss you for a loop every once in a while.git ad