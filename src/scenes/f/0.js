import React, { Component } from 'react';
import { Block, Text, Link } from '../elements';
import styled from 'styled-components';
import colors from '../elements/colors';
import background from '../../images/gradient.jpg';

const Background = styled.div`
  position: fixed;
  height: 105%;
  width: 100%;
  margin-top: -9%;
  background-image: url(${background});
  background-size: cover;
`;

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
    <LastText italic={true}><Link to='/i/0'>You think you are an ocean, but you are just a tiny tear drop</Link></LastText>
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
    }, 3500);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.addline();
      window.scrollTo(0,document.body.scrollHeight)
    }, 3500);
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
      <div>
        <Background/>
        <Block position={5} width='80%' sansSerif={true} linkColor='yellow'>
          {this.state.lines}
        </Block>
      </div>
    )
  }
}

export default C;
