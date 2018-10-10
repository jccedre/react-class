import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledPerson = styled.div`
  flex: 1 0 50%;
  margin: 1em;
  border: 1px solid ${props => props.theme.colors.black};
  box-shadow: 0 2px 5px 0 ${props => props.theme.colors.shadow};
  padding: 1em;
  max-width: 500px;
  transition: box-shadow 0.5s;

  &:hover,
  &:focus {
    box-shadow: 0 4px 5px 0 ${props => props.theme.colors.shadowHover};
  }

  &:active {
    box-shadow: 0 4px 5px 0 ${props => props.theme.colors.shadowActive};
  }

  ${props => props.theme.media.medium`flex: 1 0 100%;`}
`;

class Person extends Component {

  constructor(props) {
    super(props);
    console.log('[Person.js] Inside Constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('[Person.js] Inside componentWillMount()');
  }

  componentDidMount() {
    console.log('[Person.js] Inside componentDidMount()');
    if(this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }
    render () {
      console.log('[Person.js] Inside render()');
      return (
        <StyledPerson>
          <p onClick={this.props.click}>I'm a {this.props.name} and I am {this.props.age} years old!</p>
          <p>{this.props.children}</p>
          <input
            ref={this.inputElement}
            type="text"
            onChange={this.props.changed} value={this.props.name} />
        </StyledPerson>
      )
    }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  changed: PropTypes.func,
};

export default Person;
