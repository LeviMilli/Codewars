# Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

# Rules for a smiling face:

# Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
# A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
# Every smiling face must have a smiling mouth that should be marked with either ) or D
# No additional characters are allowed except for those mentioned.

# Valid smiley face examples: :) :D ;-D :~)
# Invalid smiley faces: ;( :> :} :]

# Example
# countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
# countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
# countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

def count_smileys(arr):
    count = 0
    for face in arr:
        if len(face) == 2:
            if face[0] in [";", ":"] and face[1] in [")", "D"]:
                count += 1
        if len(face) == 3:
            if face[0] in [";", ":"] and face[1] in ["-", "~"] and face[2] in [")", "D"]:
                count += 1
                
    return count

# for this we first need to check if the lenght of each of the faces in our arr that we are testing are 2 or 3 in length... 
# that way we know whether or not to check for a nose or not. depending on our len, we can use and if in condition and put the peices
# of our face to check for.