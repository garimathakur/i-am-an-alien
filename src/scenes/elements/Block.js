import React from 'react';
import styled from 'styled-components';
import colors from './colors';

const positions = [
  {
    top: '30%',
    left: '50%',
  },
  {
    top: '10%',
    left: '50%',
  },
  {
    top: '23%',
    left: '10%',
  },
  {
    top: '45%',
    left: 'calc(50% - 80px)',
  },
  {
    top: '80%',
    left: '60%',
  },
  {
    top: '10%',
    left: '10%',
  },
  {
    top: '80%',
    left: '60%',
  },
  {
    top: '85%',
    left: '45%',
  }
];

const Block = styled.div`
  font-weight: normal;
  font-family: ${props => props.sansSerif ? 'Helvetica' : 'Libre Baskerville'}, ${props => props.sansSerif ? 'sans-serif' : 'serif'};
  font-style: ${props => props.italic ? 'italic' : 'normal'};
  position: relative;
  top: ${props => positions[props.position].top};
  left: ${props => positions[props.position].left};
  width: ${props => props.width ? props.width : '45%'};
  color: ${props => props.textColor}

  a {
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.linkColor}
  }

  a:visited {
    text-decoration: none;
    color: ${props => colors.pink};
  }
`;

Block.defaultProps = {
  position: 0,
  linkColor: colors.pink,
  textColor: colors.yellow,
};

export default Block;
