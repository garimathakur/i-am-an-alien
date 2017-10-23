import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from './elements';
import styled from 'styled-components';

const SecondSplendorText = styled(Text)`
  position: absolute;
  top: -31px;
  left: -93px;
  transform: scale(3.0);
`;

class C extends Component {
  state = {
    showSecondSplendor: false,
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showSecondSplendor: true,
      });
    }, 2000);
  }

  render() {
    return (
      <SuperBlock>
        <Block position={1} linkColor='yellow'>
          <Text textColor='red'>Your body is horrific and harmful</Text>
          <Text textColor='red'>Your perceptions have been altered and rendered.</Text>
          <Text textColor='red'>Are you safe from all fear and rage from within and outside?</Text>
          <Text textColor='red'>The top layer of your skin is peeling off</Text>
        </Block>
        <Block position={2} linkColor='yellow'>
          <Text scale><Link to='/10'>Splendor of race</Link></Text>
          {this.state.showSecondSplendor ? <SecondSplendorText><Link to='/10'>Splendor of race</Link></SecondSplendorText> : null}
        </Block>
      </SuperBlock>
    );
  }
}

export default C;
