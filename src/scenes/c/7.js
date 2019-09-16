import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from '../elements';
import styled, { keyframes } from 'styled-components';

const randomNumInRange = (max, min) => Math.random() * (max - min + 1) + min;
const randomIntInRange = (max, min) => Math.floor(randomNumInRange(max, min));

const scales = Array.apply(null, Array(10)).map(() => {
  return keyframes`
  	from {
  		transform: scale(0);
  	}

  	to {
  		transform: scale(${randomNumInRange(0.5, 5)});
  	}
  `;
});

const padding = 50;

const GrowingYou = styled(Text)`
  top: ${props => randomNumInRange(padding, window.innerHeight - padding)}px;
  left: ${props => randomNumInRange(padding, window.innerWidth - padding)}px;
  transform-origin: center center;
  position: fixed;
  animation: ${props => scales[randomIntInRange(0,9)]} 1.4s ease 0s 1 normal forwards;
`;

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yous: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      const yous = [
        <GrowingYou textColor='pink' key={'a'}>you are an alien</GrowingYou>,
        <GrowingYou textColor='pink' key={'b'}>you are an alien</GrowingYou>,
        <GrowingYou textColor='pink' key={'c'}>you are an alien</GrowingYou>,
        <GrowingYou textColor='pink' key={'d'}>you are an alien</GrowingYou>,
        <GrowingYou textColor='pink' key={'e'}>you are an alien</GrowingYou>,
        <GrowingYou textColor='pink' key={'f'}>you are an alien</GrowingYou>,
      ]
      this.setState({
        yous,
      })
    }, 500);
  }

  render() {
    return (
      <SuperBlock>
        <Block>
          {this.state.yous}
        </Block>
        <Block position={6}>
          <Text textColor='pink'><Link to='/c/8'>you are an alien</Link></Text>
        </Block>
      </SuperBlock>
    )
  }
}

export default C;
