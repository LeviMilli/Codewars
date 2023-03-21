// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.



function findShort(s){
    let split = s.split(" ")
    let answer = Infinity
    for (let i = 0; i < split.length; i++){
      if(split[i].length < answer){
        answer = split[i].length
      }
    }
    
    return answer
  }


  /* 
  it is pretty simple. we just just need to check on the way down if our current spot in our split length is smaller than 
  the previous answer. the set answer. could also sort the split array and pop off the first and take the length as well.
  */