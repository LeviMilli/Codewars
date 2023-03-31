// You decide to create a simple list of your favourite Easter eggs in React.

// Challenge
// Learn about nesting and listing React components.

// The component EggList will set a prop called eggs which is an array of your favourite easter eggs e.g. "Lindt".
// Loop through the props.eggs to output a unorder list of Easter eggs.
// Each list item should be a component called EasterEgg with a prop name, to render the name in a li tag.
// Each EasterEgg will need a key prop with a unique id. Use the index of the array for now.
// About keys in React lists
// While you can use the index of the array for a key because they should be unique among their siblings. However it is better to use unique values.

// Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity



import React from 'react';

export const EggList = (props) => {
  const {eggs} = props
  
  return (
  <ul>  
    {eggs.map((egg, index) => (
     <EasterEgg name={egg} key={index} />
  ))}
    
  </ul>    
  );
};
export const EasterEgg = (props) => {
  const {name} = props
  
  return <li>{name}</li>
};



/*
Fairly simple react problem. We are told that within props there is an eggs array that we are going to use. for each component,
we deconstruct the props we need. we are going to be passing a name prop to the EasterEgg so we deconstruct name from it and use
it to make our <li> from our map. We then create the EggList component. We grab the eggs array from the props being passed in. 
then run a map and pass each name to the easteregg <li> creater. If we had an _id from a database, ideally we would want to use that
instead of the index as its never going to run into a duplicate, but for this example we can just use index and be fine.
*/