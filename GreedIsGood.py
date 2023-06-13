# Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.

#  Three 1's => 1000 points
#  Three 6's =>  600 points
#  Three 5's =>  500 points
#  Three 4's =>  400 points
#  Three 3's =>  300 points
#  Three 2's =>  200 points
#  One   1   =>  100 points
#  One   5   =>   50 point
# A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.

# Example scoring

#  Throw       Score
#  ---------   ------------------
#  5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
#  1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
#  2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
# In some languages, it is possible to mutate the input to the function. This is something that you should never do. If you mutate the input, you will not be able to pass all the tests.

def score(dice):
    score = 0
    counts = [0] * 7  # Initialize counts for each dice value (from 1 to 6)

    for value in dice:
        counts[value] += 1

    for i in range(1, 7):
        if counts[i] >= 3:  # Three or more of the same value
            if i == 1:
                score += 1000
            else:
                score += i * 100

            counts[i] -= 3  # Subtract three counted dice

        if i == 1:  # Single 1
            score += counts[i] * 100
        elif i == 5:  # Single 5
            score += counts[i] * 50

    return score


# so for this we we are basically making a tracker for each dice that appears and putting it into our counts, then we can itterate over 
# it with a for loop and i, giving us our current dice and number. if its a triple, we can just reduce by 3. then we move on 
# to our 1 and 5. we count 100 for 1's and 50's for 5's then return score.
