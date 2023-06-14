# Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

# Examples:

# * 'abc' =>  ['ab', 'c_']
# * 'abcdef' => ['ab', 'cd', 'ef']

def solution(s):
    answer = []
    
    for i, letter in enumerate(s):
        if i % 2 == 0:
            if len(s[i:]) == 1:
                answer.append(s[i] + "_")
            else:
                answer.append(s[i:i+2])
    return answer

# for this one we just really need to index for each value and we can ansewr the problem based off that. if we are on an even index,
# we need to perform some sort of append. depending on whether we are at the end or not. if we are, we need to add a "_" to it
# to make it work, if we aren't, we just append a slice from our current index to i+2.