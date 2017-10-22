import React from 'react';
import { Block, Text, Link } from './elements';

const Component = () => (
  <Block>
    <Text>We are all <Link to="/2">migrants</Link> through <Link to="/4">time</Link></Text>
  </Block>
);

export default Component;
