// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 


function cakes(recipe, available) {
  let maxCakes = Infinity
  for (let ingredients in recipe){
    if (available.hasOwnProperty(ingredients)){
        let possibleCakes = Math.floor(available[ingredients] / recipe[ingredients])
        if (possibleCakes < maxCakes) {
          maxCakes = possibleCakes
       }
    } else {
      maxCakes = 0
      break;
      }
    }
   return maxCakes     
  }



/* 
We need to check whether or not we can make a cake with our available ingredent given the recipe.
First is to set maxCakes to Infinity because we are going to be setting it down as we go. If its 
set to 0 then there is a chance that it will never be set. we could change our if statement to
(possibleCakes <= myCakes) then initialize myCakes as zero, but Infinity looks cooler.
so then we use a for in loop to grab each ingredient in recipe. then we check the property
against avaialbe, if it exists we continute, if not the function over and our else takes it.
we need to get the possible cakes so we floor the result of availabe / recipe.
we then set this as our maxCakes if its lower, becuase we are just taking the lowest amount of 
maxCakes that we can get and return it. and that its, this one is kinda tricky but was fun.
*/





