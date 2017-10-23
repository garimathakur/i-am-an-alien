import React from 'react';
import { Block, Text, Link } from './elements';

const Component = () => (
  <Block position={3}>
    <Text><Link to='/11'>estranged</Link> or <Link to='/12'>excluded</Link></Text>
  </Block>
);

export default Component;
