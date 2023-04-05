// Write a react component that will display the current value of our counter.

// The counter should start at 0.
// There should be a button to add 1.
// There should also be a button to subtract 1.
// We want to be able to see the value of the counter - so it should be rendered! And for your buttons to work they will need an onClick prop.

// In your render you should return:

// The counter display element with an id of 'counter', containing the counter value.
// An increment button with an id of 'increment'
// A decrement button with an id of 'decrement'


import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter : 0
    }
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);

    // Your state
  }
  
  increment(){
    this.setState({
      counter: this.state.counter + 1
    })
    }
    
  decrement(){
    this.setState({
      counter : this.state.counter -1 
    })
  }
  

  
  // Your event handlers 
  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
          <button id="decrement" onClick={this.decrement} type="button">
            Decrement
          </button>
          <button id="increment" onClick={this.increment} type="button">
            Increment
          </button>
      </div>
    )
  }
}




/*
so this was a pretty fun and quick problem. first we needed to add the super(props). We then add our counter
state for use later. then we moved on to adding and binding the functions to the constructor. Next we need to create the 
functions to interact with and set the state of our counter. we use setState and pass an object to match the state that
we need to change. we do this by setting ght counter to this.state.counter + or - 1 depending on the function. afterwards we add a 
simple onClick and our id's so the test case knows where to look for the answers. Easy as that.
*/