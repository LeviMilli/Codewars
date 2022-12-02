// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"
// PARSINGREGULAR EXPRESSIONS


function domainName(url){
    let mainString = url.replace("http://", "").replace("https://", "").replace("www.", "")
    let justDomain = mainString.split(".")
    return justDomain[0]
    
    
  }


  //the first thing i did here was replace the first parts of each of these with nothing. I knew the beginning values of the urls i was getting so it was able to be hard coded to remove them.
  // If the first parts of the domains get more complex then there needs to be a more dynamic way, but for now this works. Just hard code the specific replaces with nothing and split at the 
  // remaining ".". Return the first item of the array as it will always be only the domain left