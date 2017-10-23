import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from './elements';
import styled from 'styled-components';

const randomNumInRange = (max, min) => Math.random() * (max - min + 1) + min;

const RotatedText = styled(Text)`
  cursor: pointer;
  transform-origin: center center;
  position: fixed;
  top: ${props => randomNumInRange(30, 50)}%;
  left: ${props => randomNumInRange(30, 50)}%;
  transform: scale(${props => randomNumInRange(0.3, 5.0)}) rotate(${props => randomNumInRange(-60, 60)}deg);
`;

const WhiteRotatedText = styled(RotatedText)`
  a {
    color: white;
  }

  a:visited {
    color: white;
  }
`;

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      otherCutoffFeelings: [],
    };
  }

  handleClick = () => {
    const otherCutoffFeelings = this.state.otherCutoffFeelings;
    otherCutoffFeelings.push(
      (otherCutoffFeelings.length < 3 ?
      <RotatedText serif={false} italic={true} key={this.state.otherCutoffFeelings.length}>
        <a onClick={this.handleClick}>You have cut off all your feelings</a>
      </RotatedText> :
      <WhiteRotatedText serif={false} italic={true} key={this.state.otherCutoffFeelings.length}>
        <Link to='/12'>You have cut off all your feelings</Link>
      </WhiteRotatedText>)
    );
    this.setState({
      otherCutoffFeelings,
    });
  }

  render() {
    return (
      <SuperBlock>
        <Block position={4} linkColor='pink'>
          <Text serif={false} italic={true}>
            <a onClick={this.handleClick.bind(this)}>You have cut off all your feelings</a>
          </Text>
        </Block>
        <SuperBlock linkColor='yellow'>
          {this.state.otherCutoffFeelings}
        </SuperBlock>
      </SuperBlock>
    );
  }
}

export default C;
