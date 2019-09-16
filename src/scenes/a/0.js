import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from '../elements';

class C extends Component {
  componentDidMount() {
    window.hasVistedAnimatedFeelings1 = false;
    window.hasVistedAnimatedFeelings2 = false;
  }
  render() {
    return (
      <Block>
        <Text><Link to='/a/1'>cities</Link> without <Link to='/e/0'>citizens</Link></Text>
      </Block>
    );
  }
}

export default C;
