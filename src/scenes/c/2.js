import React from 'react';
import { Block, Text, Link } from '../elements';
import styled from 'styled-components';

const HangingLinkText = styled(Text)`
  transform: rotate(50deg);
`;

const Spacer = styled.div`
  height: 48px;
`

const Component = () => (
  <Block>
    <Spacer/>
    <HangingLinkText><Link to='/c/3'>ladder</Link></HangingLinkText>
  </Block>
);

export default Component;
