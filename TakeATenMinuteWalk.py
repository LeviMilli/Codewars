# You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an 
# appointment, so you decided to take the opportunity to go for a short walk. 
# The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an
#  array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block 
#  for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will 
#  return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, 
#                                                                               of course, return you to your starting point. 
#                                                                               Return false otherwise.

# Note: you will always receive a valid array containing a random assortment of direction 
# letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).


def is_valid_walk(walk):
    
    if len(walk) != 10:
        return False
    
    y = 0
    x = 0
    
    
    for dir in walk:
        if dir == "n":
            y += 1
        if dir == "s":
            y -= 1
        if dir == "w":
            x += 1
        if dir == "e":
            x -= 1
            
    return x == 0 and y == 0
        
            
    
    #determine if walk is valid
    


    # we need to check if this problem comes out to zero when we are adding and subtracting by 1 for our north and south. 
    # then east and west. we do this with a for loop and if statemnt. if both our y and x axis come out to z AND our trip 
    # was exactly 10 diretions, then we can return true, otherwise its false.
