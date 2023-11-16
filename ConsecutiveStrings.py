# You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

# Examples:
# strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

# Concatenate the consecutive strings of strarr by 2, we get:

# treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
# folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
# trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
# blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
# abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

# Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
# The first that came is "folingtrashy" so 
# longest_consec(strarr, 2) should return "folingtrashy".

# In the same way:
# longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
# n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).

# Note
# consecutive strings : follow one after another without an interruption

def longest_consec(strarr, k):
    n = len(strarr)
    if n == 0 or k > n or k <= 0:
        return ""

    longest_str = ""

    for i in range(n - k + 1):
        current_str = ''.join(strarr[i:i + k])
        if len(current_str) > len(longest_str):
            longest_str = current_str

    return longest_str


# so for this one we need to return "" if it doesn't meet our initial requirements. if k is negative or the length of strarr is shorter than k
# then we just need to test our current string which will be our range, we join all our array spots using a splice of 
# [i:i + k] on our strarr. we can continuously update our longest string with the new string if its turns out to me longer.