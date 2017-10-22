import React from 'react';
import { Block, Text, Link } from './elements';

const Component = () => (
  <Block position={1} linkColor='yellow'>
    <Text color='white'>Your body is horrific and harmful</Text>
    <Text color='white'>Your perceptions have been altered and rendered.</Text>
    <Text color='white'>Are you safe from all fear and rage from within and outside?</Text>
    <Text><Link to="/9">The top layer of your skin is peeling off</Link></Text>
  </Block>
);

export default Component;
