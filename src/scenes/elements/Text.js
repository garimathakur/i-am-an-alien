import React from 'react';
import styled from 'styled-components';
import { scale } from '../animations';

export const Text = styled.p`
  color: ${props => props.color};
  ${'' /* ${props => props.scale ?
    animation: ${scale} 1s linear;
    : ''
  } */}
`;

Text.defaultProps = {
  color: 'rgba(247,236,34,1)',
};

export default Text;
