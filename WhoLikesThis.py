# You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

# Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

# []                                -->  "no one likes this"
# ["Peter"]                         -->  "Peter likes this"
# ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
# ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
# ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
# Note: For 4 or more names, the number in "and 2 others" simply increases.

def likes(names):
    leg = len(names)
    if leg == 0:
        return "no one likes this"
    if leg == 1:
        return "{} likes this".format(names[0])
    if leg == 2:
        return "{} and {} like this".format(names[0], names[1])
    if leg == 3:
        return "{}, {} and {} like this".format(names[0], names[1], names[2])
    else:
        return "{}, {} and {} others like this".format(names[0], names[1], leg - 2)


# so for this one we most likely need to type each string out because of the nature of the challenge. its returning something unique
# and isn't dynamic. so we use format and {} to replace each one with the corresponding value that we need to use.