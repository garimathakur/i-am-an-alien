import React from 'react';
import { Block, Text, Link } from '../elements';

const Component = () => (
  <Block position={1} linkColor='white'>
    <Text italic={true}>Your body is horrific and harmful</Text>
    <Text><Link to="/b/2">Your perceptions have been altered and rendered.</Link></Text>
  </Block>
);

export default Component;
