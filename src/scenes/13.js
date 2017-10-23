import React from 'react';
import { Block, Text, Link } from './elements';
import styled from 'styled-components';

const HangingLinkText = styled(Text)`
  transform: rotate(50deg);
`;

const Component = () => (
  <Block>
    <Text>It takes you more time to climb the</Text>
    <HangingLinkText><Link to='/14'>ladder</Link></HangingLinkText>
  </Block>
);

export default Component;
