# Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
# �
# 3
# n 
# 3
#  , the cube above will have volume of 
# (
# �
# −
# 1
# )
# 3
# (n−1) 
# 3
#   and so on until the top which will have a volume of 
# 1
# 3
# 1 
# 3
#  .

# You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

# The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
# �
# 3
# +
# (
# �
# −
# 1
# )
# 3
# +
# (
# �
# −
# 2
# )
# 3
# +
# .
# .
# .
# +
# 1
# 3
# =
# �
# n 
# 3
#  +(n−1) 
# 3
#  +(n−2) 
# 3
#  +...+1 
# 3
#  =m if such a n exists or -1 if there is no such n.

# Examples:
# findNb(1071225) --> 45

# findNb(91716553919377) --> -1


def find_nb(m):
    count = 0
    num = 0
    while count < m:
        num += 1
        count += num**3
        if m == count:
            return num
    return -1


# for this one we run a while loop with the condition of count less than m. each time we add to our count with num**3
# if at any point our m == count, we know we have our answer of block height and return num. if our while loop conclues
# without an answer of num, we return -1