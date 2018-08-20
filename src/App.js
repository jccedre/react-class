import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Gianluca', age: 0.6 },
      { name: 'Kalie', age: 25 },
      { name: 'Jean Carlos', age: 25 },
    ],
    otherState: 'other state',
  }

  switchNameHandler = () => {
    // console.log('Was clicked');
    // Don't do this: this.state.persons[0].name = 'JC';
    this.setState( {
      persons: [
        { name: 'Gianluca Cedre', age: 0.6 },
        { name: 'Kalie', age: 25 },
        { name: 'Jean Carlos', age: 25 },
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React app</h1>
      <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I like to sleep</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
