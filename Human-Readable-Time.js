DESCRIPTION:
// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

// You can find some examples in the test fixtures.

// DATE TIMEMATHEMATICSALGORITHMS



//mine
function humanReadable (seconds) {
    let hours = 0
    let minutes = 0
    let realSeconds = 0
    
    hours = Math.floor(seconds / 3600)
    minutes = Math.floor((seconds % 3600) / 60)
    realSeconds = (seconds % 3600) % 60
    
    console.log(seconds)
    
    if (hours < 10){
      hours = "0" + hours
    }
      if (minutes < 10){
      minutes = "0" + minutes
    }
      if (realSeconds < 10){
      realSeconds = "0" + realSeconds
    }
   
    
    
    
    
    return `${hours}:${minutes}:${realSeconds}`;
  }


  //clever
  function humanReadable(seconds) {
    var pad = function(x) { return (x < 10) ? "0"+x : x; }
    return pad(parseInt(seconds / (60*60))) + ":" +
           pad(parseInt(seconds / 60 % 60)) + ":" +
           pad(seconds % 60)
  }


  /// Theres more dynamic ways to do this than what i first did. Changing it to human readable time is relatively striaght forward. we use multiples of 60 and use the remainder for the next part.
  // IE... start from the hours and work down. remaining seconds from hours turn into minutes and remaining seconds are just seconds. then return them with `${}` template literals or 
  // template string