import React from 'react';
import { Block, Text, Link } from './elements';

const Component = () => (
  <Block position={5} width={'80%'} italic>
    <Text>Imagine a landscape made of your multiple mindscapes</Text>
    <Text>You come from the land where lizards are crawling on the white walls</Text>
    <Text><Link to='/33'>You are a brown slithery translucent lizard</Link></Text>
  </Block>
);

export default Component;
