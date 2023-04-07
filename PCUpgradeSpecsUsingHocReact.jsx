// Challenge
// You're building a new feature on your e-commerce site which displays two computer specs - basic and pro.

// The PcDisplay component is already built and expects 5 props. { title, price, cpu, ram, ssd }

// You will need to build a withPriceModel HOC and using that to manage the price of the BasicModel and ProModel components.

// Build a HOC called withPriceModel which takes the PcDisplay component for first param and price increase number for the second param.

// withPriceModel will manage the price and must set a default price of 50.

// BasicModel should use the default price set by withPriceModel

// ProModel should use withPriceModel to increase the price by 60. Total price should be 110.

// Since the withPriceModel is responsible for managing the price, ensure that it can't be overritten by passing in a price prop.



const React = require('react');

// Don't change PcDisplay
const PcDisplay = (props) => {
  return (<div>
  <h1>{props.title}</h1>
  <p id="price">£{props.price}</p>

  <ul>
    <li><label>CPU</label> <span>{props.cpu}</span></li>
    <li><label>RAM</label> <span>{props.ram}</span></li>
    <li><label>SSD</label> <span>{props.ssd}</span></li>
  </ul>
  </div>);
};


// Implement HOC -> returns a functions that wraps the passed in `PcDisplay` component
let withPriceModel = ((Component, increase) => {
  return function(props) {
    const newPrice = 50 + increase || 50
    const newProps = {...props, price: newPrice}
    return <Component {...newProps} />
  }
});

// In this case we could also deconstruct the price from our props and use that instead 
// something like: const { price, ...rest } = props; 
// then just make it price afterwards:  return <WrappedComponent price={newPrice} {...rest} />;


// Build basic and pro model components using `withPriceModel`
let BasicModel = withPriceModel(PcDisplay);

let ProModel = withPriceModel(PcDisplay, 60);


/*
So in this problem we do HOC, which is bascially higher order functions but with components obviously. It looks confusing at first
but its not as bad as it seems. The first component is already set as PcDisplay and we will be using that. All we want to do
is add a price to it. One being a basic model with the price being 50 flat and one with the pro model which the price increase 
can vary. so we need to set a base withPriceModel to work from. we do this by passing in the component, and the price.. we called
it increase here but price would fit symatically as well. use "return function(props)" to access the props from the compoent.
then we set our new price to be 50 + increase. if increase doesnt exist we just set to 50 for the base. then we need to pass our 
new prop with the component out. So we create new props with a spread syntax and add price to it. Think of this withPriceModel as a 
roadside pitstop that is upgrading our compoent with an extra shiny new prop. once the component is passed out. we can then set a 
basic model that, if we dont pass a price increase, will have a base price of 50. if pass a price like we do in the proModel,
then that will increase the base. so in this proModel case, the price would be 110.
*/


