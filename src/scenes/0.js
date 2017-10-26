import React from 'react';
import { Block, Text, Link } from './elements';

const Component = () => (
  <Block>
    <Text><Link to='/1'>cities</Link> without <Link to='/17'>citizens</Link></Text>
  </Block>
);

export default Component;
