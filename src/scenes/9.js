import React from 'react';
import { Block, Text, Link, SuperBlock } from './elements';

const Component = () => (
  <SuperBlock>
    <Block position={1} linkColor='yellow'>
      <Text color='rgba(44,18,14,1)'>Your body is horrific and harmful</Text>
      <Text color='rgba(44,18,14,1)'>Your perceptions have been altered and rendered.</Text>
      <Text color='rgba(44,18,14,1)'>Are you safe from all fear and rage from within and outside?</Text>
      <Text color='rgba(44,18,14,1)'>The top layer of your skin is peeling off</Text>
    </Block>
    <Block position={2} linkColor='yellow'>
      <Text><Link to='/10'>Splendor of race</Link></Text>
    </Block>
  </SuperBlock>
);

export default Component;
