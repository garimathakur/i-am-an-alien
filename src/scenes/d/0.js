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
      <SuperBlock>
        <Block position={5}>
          {window.hasVistedAnimatedFeelings1 ? <Text>estranged</Text> : <Text><Link to={this.props.to || '/d/1'}>estranged</Link></Text>}
        </Block>
        <Block position={9}>
          <Text>or</Text>
        </Block>
        <Block position={10}>
          {window.hasVistedAnimatedFeelings2 ? <Text>excluded</Text> : <Text><Link to={this.props.to || '/d/2'}>excluded</Link></Text>}
        </Block>
      </SuperBlock>
    );
  }
}

export default C;
