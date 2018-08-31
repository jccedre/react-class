import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const StyledCockpit = styled.div`
  flex: 1 0 100%;
  text-align: center;
`;

const cockpit = ( props ) => {
  return (
    <StyledCockpit>
      <h1>{props.appTitle}</h1>
      <Button
        size={'large'}
        click={props.toggle}
        color={props.buttonState ? 'secondary' : 'primary'}>
          Switch Name
        </Button>
    </StyledCockpit>
  );
};

export default cockpit;
