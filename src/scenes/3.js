import React from 'react';
import { Block, Text, Link } from './elements';

const Component = () => (
  <Block linkColor='yellow'>
    <Text><Link to="/4">If you are travelling without</Link></Text>
    <Text><Link to="/4">your papers, your existence cannnot</Link></Text>
    <Text><Link to="/4">be verified and you will be deported</Link></Text>
    <Text><Link to="/4">back to the land of your fear</Link></Text>
  </Block>
);

export default Component;
