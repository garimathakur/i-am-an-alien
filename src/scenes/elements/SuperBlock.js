import React from 'react';
import styled from 'styled-components';
import Block from './Block';
import colors from './colors';

const SuperBlock = styled.div`
  width: 100%;
  height: 100%;
  font-family: ${props => props.serif ? 'serif' : 'sans-serif'};
  font-style: ${props => props.italic ? 'italic' : 'normal'};

  a {
    cursor: pointer;
    color: ${props => colors[props.linkColor]};
  }

  a:visited {
    color: ${props => colors[props.linkColor]};
  }
`;

SuperBlock.defaultProps = {
  linkColor: 'pink',
};

export default SuperBlock;
