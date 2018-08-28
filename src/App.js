import React, { Component } from 'react';
import './App.css';
import styled, { keyframes, ThemeProvider } from 'styled-components';
import { main } from './Styles/Main';
import StyledSection from './Grid/StyledSection';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      { id: '1adfafq', name: 'Gianluca', age: 0.6 },
      { id: '1231231', name: 'Kalie', age: 25 },
      { id: 'adadq12', name: 'Jean Carlos', age: 25 },
    ],
    otherState: 'other state',
    showPersons: false,
  }


  nameChangeHandler = ( event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState( {persons: persons} );
  }

  deletePersonHandler = ( personIndex ) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = ( event ) => {
    const doesShow = this.state.showPersons;

    this.setState({showPersons: !doesShow});
  }

  render() {

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)}/>
          })}
        </div>
      );
    }

    return (
      <ThemeProvider theme={main}>
        <StyledSection>
          <div className="header">
            <h1>Hi, I'm a React app</h1>
            <button onClick={this.togglePersonsHandler}>Switch Name</button>
          </div>
          {persons}

        </StyledSection>
      </ThemeProvider>
    );
  }
}

export default App;
