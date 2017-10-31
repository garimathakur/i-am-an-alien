import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from '../elements';
import styled from 'styled-components';

class C extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <SuperBlock>
        <Block position={4} linkColor='pink' italic sensSerif={true}>
          <Text serif={false}>
            <Link to='/c/8'>You have cut off all your feelings</Link>
          </Text>
        </Block>
      </SuperBlock>
    );
  }
}

export default C;
