import React from 'react';
import { Block, Text, Link } from '../elements';

const Component = () => (
  <Block>
    <Text><Link to='/a/1'>cities</Link> without <Link to='/e/0'>citizens</Link></Text>
  </Block>
);

export default Component;
