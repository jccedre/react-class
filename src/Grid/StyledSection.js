import React from 'react';
import styled from 'styled-components';


const StyledSection = styled.section`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.red};
`;

export default StyledSection;
