import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from '../elements';

class C extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Block position={8}>
        <Text><Link to='/a/0'>you are an alien</Link></Text>
      </Block>
    )
  }
}

export default C;
