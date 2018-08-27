import React from 'react';
import styled from 'styled-components';

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

const person = ( props ) => {
  return (
    <StyledPerson>
      <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
    </StyledPerson>
  )
};

export default person;
