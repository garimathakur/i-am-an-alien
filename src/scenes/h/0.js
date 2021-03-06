import React from 'react';
import { Block, Text, Link } from '../elements';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 48px;
`;

const Component = () => (
  <Block>
    <Spacer/>
    <Text><Link to='/h/1'>A land made of aliens</Link></Text>
  </Block>
);

export default Component;
