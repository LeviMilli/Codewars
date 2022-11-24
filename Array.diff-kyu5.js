DESCRIPTION:
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

function arrayDiff(a, b) {
    return a.filter(val => !b.includes(val));
  }

  // We use filter in this case. filter, unlike foreach, will return an array based on what passed the parameters, similar to map.
    // we take the array of a and use .filter() and create an arrow function with val being the parameter if each value of a.
    // With this function return an array that does not include the value of our a value in b. written like !b.