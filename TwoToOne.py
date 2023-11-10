# Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

# Examples:
# a = "xyaabbbccccdefww"
# b = "xxxxyyyyabklmopq"
# longest(a, b) -> "abcdefklmopqwxy"

# a = "abcdefghijklmnopqrstuvwxyz"
# longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"


def longest(a1, a2):
    return "".join(sorted(set(a1+a2)))

# so for this one we could also make a dict work as well. its much easier to just do a set. so here we use set(a1+a2) and it 
# creates an object with unique letters similar to how an array would work.