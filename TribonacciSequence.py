# ell met with Fibonacci bigger brother, AKA Tribonacci.

# As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

# So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

# [1, 1 ,1, 3, 5, 9, 17, 31, ...]
# But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

# [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
# Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

# Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

# If you enjoyed this kata more advanced and generalized version of it can be found in the Xbonacci kata

# [Personal thanks to Professor Jim Fowler on Coursera for his awesome classes that I really recommend to any math enthusiast and for showing me this mathematical curiosity too with his usual contagious passion :)]

def tribonacci(signature, n):
    if n == 0:
        return []
    elif n <= len(signature):
        return signature[:n]

    sequence = signature[:]
    for i in range(len(signature), n):
        next_element = sum(sequence[i-3:i])
        sequence.append(next_element)

    return sequence


# so for this one, we do a few things. first being if our n is less than our signature, we need to use a slice notation to return 
# for signature up to n using [:n]. the second thing we need to do is create a for loop range from the len of our signature to n,
# we do this because we will only be needing to itterate from index 2 and on. then we append the sum of the previous 3 items in our list
# using slice notation and sum. then we return our answer