import React from 'react';
import styled from 'styled-components';
import { scale } from '../animations';
import colors from './colors';

export const Text = styled.p`
  padding-top: 0;
  color: ${props => colors[props.textColor]};
  transform-origin: left center;
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  font-family: ${props => props.sansSerif ? 'Helvetica' : 'Libre Baskerville'}, ${props => props.sansSerif ? 'sans-serif' : 'serif'};
  ${props => props.scale ?
    `animation: ${scale} 1s ease 0s 1 normal forwards`
    : ''
  }
`;

Text.defaultProps = {
  textColor: 'yellow',
  serif: true,
  italic: false,
};

export default Text;
