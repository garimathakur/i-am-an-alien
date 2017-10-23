import React from 'react';
import styled from 'styled-components';
import { scale } from '../animations';
import colors from './colors';

export const Text = styled.p`
  color: ${props => colors[props.textColor]};
  transform-origin: left center;
  ${props => props.scale ?
    `animation: ${scale} 0.5s ease-in 0.5s 1 normal forwards`
    : ''
  }
`;

Text.defaultProps = {
  textColor: 'yellow',
};

export default Text;
