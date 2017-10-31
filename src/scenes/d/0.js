import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from '../elements';

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visitedOnePages: window.hasVistedAnimatedFeelings1 || window.hasVistedAnimatedFeelings2,
      // visitedBothPages: window.hasVistedAnimatedFeelings1 && window.hasVistedAnimatedFeelings2,
    };
  }

  render() {
    if (!this.state.visitedOnePages) {
      return (
        <Block position={3}>
          <Text><Link to='/d/1'>estranged</Link> or <Link to='/d/1'>excluded</Link></Text>
        </Block>
      );
    } else if (this.state.visitedOnePages) {
      return (
        <Block position={3}>
          <Text><Link to='/d/2'>estranged</Link> or <Link to='/d/2'>excluded</Link></Text>
        </Block>
      );
    } else {
      return (
        <Block position={3}>
          <Text><Link to='/a/4'>estranged</Link> or <Link to='/a/4'>excluded</Link></Text>
        </Block>
      );
    }
  }
}

export default C;
