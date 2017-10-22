import React from 'react';
import styled from 'styled-components';

const positions = [
  {
    top: '30%',
    left: '50%',
  },
];

const Block = styled.div`
  font-family: serif;
  position: relative;
  top: ${props => positions[props.position].top};
  left: ${props => positions[props.position].left};

  a {
    text-decoration: none;
  }

  a:visited {
    color: ${props => props.linkColor};
  }
`;

Block.defaultProps = {
  position: 0,
  linkColor: 'pink',
};

export default Block;
