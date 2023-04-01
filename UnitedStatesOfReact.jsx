// What's Involved
// State
// Changing State
// Conditional Rendering based on state
// The challenge
// You will be given a component called States. You will need to establish an initial state for the component called united and for it to be set to false.

// Then write a unite function that changes this state to true.

// Then conditionally render a bespoke message in the component.

// If the States are united then display "Code for everyone"

// If the States aren't united then display "Make America code again"






import React from 'react';

export class States extends React.Component {
  constructor() {
    super(); 
    this.state = {
      united: false
    }
    this.unite = this.unite.bind(this) 
  }
  
  unite() {
    this.setState(prevState => ({
      united: !prevState.united
    }));
  }
  
  
  render() {
    return (
    <div className="status">
      <h1>{this.state.united ? "Code for everyone" : "Make America code again"}</h1>
      
      <br />
       
      
      </div>
      )
  } 
}



/*
So in this case we want to intialize a state for united to false initially. In react class components we can set the state
using this.state. and the change the state, we can use this.setState pretty easy. so we first set the state of united in the constuctor.
then we need to set a unite to true. this can be achieved by using the prevState and setting it to whatver what it was not before.
then in the div we use a ternary operator and return the strings based on the true or false state of united.
*/


