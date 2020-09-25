import React, { Component } from 'react';
import { Block, Text, Link } from '../elements';
import styled from 'styled-components';
import colors from '../elements/colors';
import scrollToComponent from 'react-scroll-to-component';

const LastText = styled(Text)`
  a {
    color: ${colors.yellow};
  }
  a:visited {
    color: ${colors.yellow};
  }
  a:hover {
    color: ${colors.pink};
  }
`;

const Spacer = styled.div`
  height: 48px;
`;

const allLines = [
  <div key='a'>
    <Text italic={true}>Imagine a landscape made of your multiple mindscapes</Text>
  </div>,
  <div key='b'>
    <Text italic={true}>You come from the land where lizards are crawling on the white walls</Text>
  </div>,
  <div key='c'>
    <Text italic={true}>You are a brown slithery translucent lizard</Text>
  </div>,
  <div key='d'>
    <Text italic={true}>You are being rubbed by the slimy white eyeballs all over your body</Text>
  </div>,
  <div key='e'>
    <Text italic={true}>The moss is growing</Text>
  </div>,
  <div key='f'>
    <Text italic={true}>Giant Snails are walking all over the piles of your migration paper</Text>
  </div>,
  <div key='g'>
    <Text italic={true}>They are getting wet and washed away in the rain</Text>
  </div>,
  <div key='h'>
    <LastText italic={true}><Link to='/i/0'>You think you are  an ocean, but you are just a tiny tear drop</Link></LastText>
  </div>,
];

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: [],
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.addline();
    }, 2000);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.addline();
      if (this.state.lines.length > 1) {
        scrollToComponent(this.refs.block, {
          align: 'bottom'
        });
      }
    }, 4000);
  }

  addline = () => {
    const { lines } = this.state;

    if (lines.length <= allLines.length) {
      const newLines = allLines.slice(0, ++lines.length);
      this.setState({
        lines: newLines,
      });
    }
  }

  render() {
    return (
      <div>
        <div style={{
          background: 'linear-gradient(180deg, rgba(153,92,8,1) 0%, rgba(130,0,0,1) 17%, rgba(128,0,0,1) 28%, rgba(124,130,0,1) 100%)',
          height: '125vh'
        }}/>
        <Block ref='block' position={5} width='80%' sansSerif={true} linkColor='yellow' style={{
          position: 'absolute'
        }}>
          {this.state.lines}
        </Block>
      </div>
    )
  }
}

export default C;
