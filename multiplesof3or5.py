# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

# Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

# Note: If the number is a multiple of both 3 and 5, only count it once.

# Courtesy of projecteuler.net (Problem 1)


def solution(number):
    if number < 0:
        return 0
    
    answer = set()
    
    
    for i in range(3, number):
        if i % 3 == 0 or i % 5 == 0:
            answer.add(i)
    
    return sum(answer)
  


  # so a basic fizzbuzz question here but we are just returning the sum of all the numbers that match our condition. 

  # if 0, return 0. create an empty set with answer = set() and use .add() to add to our set after running our for loop. 

  # then we return # sum(answer)