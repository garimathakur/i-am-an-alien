import React, { Component } from 'react';
import { Block, Text, Link } from './elements';
import styled, { keyframes } from 'styled-components';

const translate = keyframes`
	from {
		transform: translate(0px, 0px) rotate(50deg);
	}

	to {
		transform: translate(0px, 1000px) rotate(50deg);
	}
`;

const HangingLinkText = styled(Text)`
  transform: rotate(50deg);
  animation: ${translate} 0.5s ease-in 0s 1 normal forwards;
`;

const Spacer = styled.div`
  height: 48px;
`;

class C extends Component {
  componentDidMount() {
		setTimeout(() => {
			window.addEventListener('click', this.listener, false);
		}, 500);
  }

  componentWillUnmount() {
    window.removeEventListener('click', this.listener, false);
  }

	listener = () => {
		this.props.history.push('/16');
	}

  render() {
    return (
      <Block>
        <Spacer/>
        <HangingLinkText><Link to='/16'>ladder</Link></HangingLinkText>
      </Block>
    );
  }
}

export default C;
