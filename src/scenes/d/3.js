import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from '../elements';

class C extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Block position={3}>
        <Text><Link to='/a/5'>estranged</Link></Text>
        <Text>or</Text>
        <Text><Link to='/a/5'>excluded</Link></Text>
      </Block>
    );
  }
}

export default C;
