import React, { Component } from 'react';
import { ThemeProvider } from 'styled-components';
import { main } from '../styles/Main';
import StyledSection from './Grid/StyledSection';
import Persons from '../components/Persons/Persons';
import Button from '../components/Button/Button';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] Inside Constructor', props);
  }

  componentWillMount() {
    console.log('[App.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[App.js] Inside componentDidMount()');
  }

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
    console.log('[App.js] Inside render()');

    let persons = null;
    let show = false;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}/>
        </div>
      );
      show = true;
    }

    return (
      <ThemeProvider theme={main}>
        <StyledSection>
        <Cockpit
          appTitle={this.props.title}
          toggle={this.togglePersonsHandler}
          buttonState={this.state.showPersons}/>
          {persons}
        </StyledSection>
      </ThemeProvider>
    );
  }
}

export default App;