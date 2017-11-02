import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from '../elements';

class C extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (window.hasVistedAnimatedFeelings1 && window.hasVistedAnimatedFeelings2) {
      this.props.history.push('/d/3');
    }
  }

  render() {
    return (
      <Block position={3}>
        {window.hasVistedAnimatedFeelings1 ? <Text>estranged</Text> : <Text><Link to='/d/1'>estranged</Link></Text>} <Text>or</Text> {window.hasVistedAnimatedFeelings2 ? <Text>excluded</Text> : <Text><Link to='/d/2'>excluded</Link></Text>}
      </Block>
    );
  }
}

export default C;
