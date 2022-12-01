// The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

// Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

// The following are examples of expected output values:

// rgb(255, 255, 255) // returns FFFFFF
// rgb(255, 255, 300) // returns FFFFFF
// rgb(0,0,0) // returns 000000
// rgb(148, 0, 211) // returns 9400D3
// ALGORITHMS


function rgb(r, g, b){
    return convertToRGB(r)+convertToRGB(g)+convertToRGB(b)
  }
  
  const convertToRGB = (rgbVal) =>{
    
    if(rgbVal <= 0) return '00'
    if(rgbVal >= 255) return 'FF'
  
    firstHex=parseInt(rgbVal/16)
    secondHex=((rgbVal/16)-firstHex) * 16
    
    return getHexValue(firstHex)+getHexValue(secondHex)
    
  }
  
  
  const getHexValue = (digit) =>{
    const rgbToHex = {
      '0': '0',  
      '1': '1',
      '2': '2',
      '3': '3',
      '4': '4',
      '5': '5',
      '6': '6',
      '7': '7',
      '8': '8',
      '9': '9',
      '10': 'A',
      '11': 'B',
      '12': 'C',
      '13': 'D',
      '14': 'E',
      '15': 'F',
    }
      
    return rgbToHex[digit.toString()]  
    
     
  }


  // to be honest i looked this up. i dont know when i will need to know how to convert rgb to hex but its in multiples of 16. when i need to know how to do it again....
  // i can look it up again. Using a function inside of a function here makes sense to convert each value to its hex coutnerpart. .toString(16) is more or less most of the 
  // of the caculations done apart from puttin them together. Theres a hashmap here to to convert number to letters easily. Again if i need to know ill just look it up again.