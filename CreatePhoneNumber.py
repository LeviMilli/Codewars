# Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

# Example
# create_phone_number([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) # => returns "(123) 456-7890"
# The returned format must be correct in order to complete this challenge.

# Don't forget the space after the closing parentheses!


def create_phone_number(numbers):
  # Check if the array contains 10 integers
  if len(numbers) != 10:
    raise ValueError("The array must contain 10 integers")

  # Convert the integers to strings
  numbers = [str(n) for n in numbers]

  # Format the numbers into a phone number string
  phone_number = "(" + numbers[0] + numbers[1] + numbers[2] + ") " + numbers[3] + numbers[4] + numbers[5] + "-" + numbers[6] + numbers[7] + numbers[8] + numbers[9]

  # Return the phone number string
  return phone_number


# so in the problem we are checking to see if its 10 integers using len. if not we raise our error.
# we then need to either put str() with numbers[0-9] in each one or create a new array with each number as a string.
# after each number is a string we can concat them into a phone number then return our phone number.

