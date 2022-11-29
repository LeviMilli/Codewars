// You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

// Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).





function isValidWalk(walk) {
    var dx = 0
    var dy = 0
    var dt = walk.length
  
    for (var i = 0; i < walk.length; i++) {
      switch (walk[i]) {
        case 'n': dy--; break
        case 's': dy++; break
        case 'w': dx--; break
        case 'e': dx++; break
      }
    }
  
    return dt === 10 && dx === 0 && dy === 0
    //insert brilliant code here
  }

  // So for this we only have a few things we need to check. at the end we need to check and make sure our x axis and y axis are both at 0. everything else doesnt matter.
  // This can be done be keeping a simple count that increases or decreases based on one direction or the other. if the end result of both x and y are 0, we are good. 
  // The walk can only take 10 minutes, so if the the array we get is not a length of 10, it also returns false.