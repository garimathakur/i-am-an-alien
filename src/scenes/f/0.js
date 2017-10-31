import React, { Component } from 'react';
import { Block, Text, Link } from '../elements';
import styled from 'styled-components';
import colors from '../elements/colors';

const bg = styled.div`
  background: linear-gradient(${colors.maroon}, yellow, ${colors.maroon});
`

const Spacer = styled.div`
  height: 48px;
`;

const allLines = [
  <div key='a'>
    <Text>Imagine a landscape made of your multiple mindscapes</Text>
  </div>,
  <div key='b'>
    <Text>You come from the land where lizards are crawling on the white walls</Text>
  </div>,
  <div key='c'>
    <Text>You are a brown slithery translucent lizard</Text>
  </div>,
  <div key='d'>
    <Text>You are being rubbed by the slimy white eyeballs all over your body</Text>
  </div>,
  <div key='e'>
    <Text>The moss is growing</Text>
  </div>,
  <div key='f'>
    <Text>Giant Snails are walking all over the piles of your migration paper</Text>
  </div>,
  <div key='g'>
    <Text>They are getting wet and washed away in the rain</Text>
  </div>,
  <div key='h'>
    <Text><Link to='/'>You think you are an ocean, but you are just a tiny tear drop</Link></Text>
  </div>,
];

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.addline();
    }, 2500);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.addline();
    }, 2500);
  }

  addline = () => {
    const { lines } = this.state;

    if (lines.length <= allLines.length) {
      console.log('lines.length', lines.length);
      const newLines = allLines.slice(0, ++lines.length);
      this.setState({
        lines: newLines,
      });
    }
  }

  render() {
    return (
      <Block position={5} width='80%' sansSerif={true} italic={true}>
        {this.state.lines}
      </Block>
    )
  }
}

export default C;
