// DESCRIPTION:

// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Examples

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.
// FUNDAMENTALSSTRINGS




function highAndLow(numbers){
    let nums = numbers.split(' ').map(Number);
    let high = Math.max(...nums);
    let low = Math.min(...nums);
   
    
    return `${high} ${low}`
 };

/*
first we need to split the numbers so we can itterate oer them and stop them from being just a string.
next we need to map over each point in our array and make them numbers so we can use them for the next part.
then we use a spread operator and use both the Math methods of max and min to get what we need.
then we use a `` to return them as a string.
*/