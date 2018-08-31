import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  padding: ${props => (props.size === 'large') ?' 0.5em 2em' : '0.5em 1em'};
  cursor: pointer;
  background-color: ${props => (props.color === 'primary') ? props.theme.colors.green : props.theme.colors.red};
  color: ${props => props.theme.colors.white};
  transition: background 0.3s;
  border: 0;
  font-size: 1.1em;

  &:hover,
  &:focus {
    background-color: ${props => (props.color === 'primary') ? props.theme.colors.greenHover : props.theme.colors.redHover};
  }

  &:active {
      background-color: ${props => (props.color === 'primary') ? props.theme.colors.greenActive : props.theme.colors.redActive};
  }
`;

const button = ( props ) => {
  return (
    <StyledButton
      size={props.size}
      onClick={props.click}
      color={props.color}>{props.children}</StyledButton>
  )
}

export default button;
