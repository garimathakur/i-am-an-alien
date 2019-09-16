import React from 'react';
import { Block, Text, Link } from '../elements';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 48px;
`;

const Component = () => (
  <Block>
    <Spacer/>
    <Text>A land made of aliens.</Text>
    <Text><Link to='/h/2'>We are all in this together</Link></Text>
  </Block>
);

export default Component;
