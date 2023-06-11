# Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

# * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
# * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
# * url = "https://www.cnet.com"                -> domain name = cnet"



def domain_name(url):

    url = url.replace("http://", "").replace("https://", "").replace("www.", "")
    
    dotoff = url.index(".")

    return url[0:dotoff]


# we only need to replace the http protocols and www.
# so we replace each of these with nothing and get the index of our first "." we then use slice notation to return the portion 
# of our url that does not contain the suffix