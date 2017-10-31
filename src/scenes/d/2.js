import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from '../elements';
import styled from 'styled-components';

class C extends Component {
  constructor(props) {
    super(props);
    window.hasVistedAnimatedFeelings2 = true;
    if (!window.hasVistedAnimatedFeelings1) {
      props.history.push('/d/1');
    }
  }

  render() {
    return (
      <SuperBlock>
        <Block position={4} linkColor='pink' italic sensSerif={true}>
          <Text serif={false}>
            <Link to='/a/4'>You have cut off all your feelings</Link>
          </Text>
        </Block>
      </SuperBlock>
    );
  }
}

export default C;
