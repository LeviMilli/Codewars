// Given a string of characters, return the character that appears the most often.

// describe("Max Character", () => {
//  it("Should return max character", () => {
//   assert.equal(max("Hello World!"), "l");
//  });
// });

// No String or Array Methods (well brute force it first, but then no methods)! 

var hashmapmaker = function(){
  let string = "netty"
  let hashmap = new Map()
  let count = 0
  let maxCount = 0
  console.log(string)

  for( let i = 0; i < string.length; i++){
    let char = string.charAt(i)
    
    if (hashmap.has(char)){
      let value = hashmap.get(char)
      hashmap.set(char, value + 1)
      
    } else {
      hashmap.set(char, 1)
    }
    if (hashmap.get(char) > maxCount){
      maxCount = hashmap.get(char)
    }
  }
    return maxCount
}

console.log(hashmapmaker())


// We create a hashmap and itterate through using a for loop. this gives us a hashmap with the values for each letter and how many times they showed up
// We then check our maxnumber count and see whether its higher than the current value of hash and set based on conditions.