// This time we want to write calculations using functions and get the results. Let's have a look at some examples:

// seven(times(five())); // must return 35
// four(plus(nine())); // must return 13
// eight(minus(three())); // must return 5
// six(dividedBy(two())); // must return 3
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand
// Division should be integer division. For example, this should return 2, not 2.666666...:
// eight(dividedBy(three()));

function zero(n) {
    return n ? n(0) : 0
 }
 function one(n) {
   return n ? n(1) : 1
 }
 function two(n) { 
   return n ? n(2) : 2
 }
 function three(n) {
   return n ? n(3) : 3
 }
 function four(n) {
   return n ? n(4) : 4
 }
 function five(n) {
   return n ? n(5) : 5
 }
 function six(n) {
   return n ? n(6) : 6
 }
 function seven(n) {
   return n ? n(7) : 7
 }
 function eight(n) {
   return n ? n(8) : 8
 }
 function nine(n) {
   return n ? n(9) : 9
 }
 
 function plus(b) {
   return function(a) {
     return a + b
   }
   
 }
 function minus(b) {
   return function(a){
     return a - b
   }
 }
 function times(b) {
   return function(a){
     return a * b
   }
 }
 function dividedBy(b) {
   return function(a){
    return Math.floor(a / b)
   }
 }



 /*
 higher order functions, ohhh fun. so with higher order functions, its good to keep in mind we are starting from the bottom level and working out way up.
 that means taht when something like six(dividedBy(two())) shows up... we need to take care of two() THEN dividedby() THEN six().
 we first can set up all the numbers.. we need them to return what they are.. so return 2 for example. if there is an argument, in this case its always going to be a function.
 so we need to pass it up the chain. in this case we use a ternary...  n ? n(2) : 2   so here we check for an argument, if it exists pass 2 up to it, otherwise just return 2.
 ok so now on to the math functions. They are ALWAYS going to be in between two numbers in this case. we dont need to do any ternary or ifs.
 from a lower level down we getting a value. so we take this value and put into a math function and again pass it up. so we return a function 
 that adds a + b, we already have b from the lower function. so the function we pass is something that the higher function can use. 
 so we return function(a) { return a + b}. a will be passed into this function from the higher from the n(2) and we give it the b from the lower.
 make sure the division function is in the right order.
 */