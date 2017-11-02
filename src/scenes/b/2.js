import React from 'react';
import { Block, Text, Link } from '../elements';

const Component = () => (
  <Block position={1} linkColor='white'>
    <Text italic={true}>Your body is horrific and harmful</Text>
    <Text italic={true}>Your perceptions have been altered and rendered.</Text>
    <Text><Link to="/b/3">Are you safe from all fear and rage from within and outside?</Link></Text>
  </Block>
);

export default Component;
