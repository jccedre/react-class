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

  switchNameHandler = (newName) => {
    // console.log('Was clicked');
    // Don't do this: this.state.persons[0].name = 'JC';
    this.setState( {
      persons: [
        { name: newName, age: 0.6 },
        { name: 'Kalie', age: 25 },
        { name: 'Jean Carlos', age: 25 },
      ]
    } )
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
        { name: 'Gianluca', age: 0.6 },
        { name: event.target.value, age: 25 },
        { name: 'Jean Carlos', age: 25 },
      ]
    } )
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Hi, I'm a React app</h1>
          <button onClick={() => this.switchNameHandler('Testing!!')}>Switch Name</button>    
        </div>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Mike')}
          changed={this.nameChangeHandler}>I like to sleep</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
      </div>
    );
  }
}

export default App;
