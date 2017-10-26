import React from 'react';
import { Block, Text, Link } from './elements';

const Component = () => (
  <Block position={1} linkColor='yellow'>
    <Text textColor='white'>Your body is horrific and harmful</Text>
    <Text textColor='white'>Your perceptions have been altered and rendered.</Text>
    <Text><Link to="/8">Are you safe from all fear and rage from within and outside?</Link></Text>
  </Block>
);

export default Component;
