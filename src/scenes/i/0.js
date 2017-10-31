import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from '../elements';
import styled, { keyframes } from 'styled-components';

const scales = keyframes`
	from {
		transform: scale(0);
	}

	to {
		transform: scale(2);
	}
`;

// const GrowingYou = styled(Text)`
//   transform-origin: center center;
//   animation:  0.7s ease 0s 1 normal forwards;
// `;

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nextComp: null,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        nextComp: <Link to='/i/1'>allowed to</Link>,
      });
    }, 2000);
  }

  render() {
    return (
      <Block position={8}>
        <Text>you are an alien {this.state.nextComp}</Text>
      </Block>
    )
  }
}

export default C;
