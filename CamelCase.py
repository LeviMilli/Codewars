# Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.

# Examples
# "the-stealth-warrior" gets converted to "theStealthWarrior"

# "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

# "The_Stealth-Warrior" gets converted to "TheStealthWarrior"

# REGULAR EXPRESSIONSALGORITHMSSTRINGS

def to_camel_case(text):
    words = text.replace("_", "-").split("-")
    
    return words[0] + "".join(word.capitalize() for word in words[1:])
    
    
    

# so in this situation we need to either replace all the - with _ or opposite of that. then we take our first word and join it 
# with the rest being capitalized using capitalize(). we use a slice notation here to start at words[1:] and continue on.