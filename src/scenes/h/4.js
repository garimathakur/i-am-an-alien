import React, { Component } from 'react';
import { Block, Text, Link } from '../elements';
import styled from 'styled-components';
import colors from '../elements/colors';

const Spacer = styled.div`
  height: 48px;
`;

const YellowLinkDiv = styled.div`
  a, a:visited {
    color: ${colors.yellow}
  }
`;

const allLines = [
  <div key='a'>
    <Text textColor='white'>A land made of aliens<br/>We are all in this together</Text>
  </div>,
  <div key='b'>
    <Text textColor='white'>But we are not in this together<br/>You start to travel to the land of glass</Text>
  </div>,
  <div key='c'>
    <Text textColor='white'>Everyone has walls of glass<br/>Every one lives inside walls of glass</Text>
  </div>,
  <div key='d'>
    <Text textColor='white'>They think you are scratching on their walls</Text>
  </div>,
  <div key='e'>
    <Text textColor='white'>They think you are snatching their sleep and sucking blood from their lands to survive</Text>
  </div>,
  <div key='f'>
    <Text textColor='white' italic={true} sansSerif={true}>“Where do you think your ass got this car from?<br/>Aren’t you done sucking up all the resources, a man yelled coming in the opposite direction on a one way street when you honked at him”</Text>
  </div>,
  <div key='g'>
    <Text textColor='white'>Are you done?</Text>
  </div>,
  <div key='h'>
    <Text textColor='white'>Have you cum yet? Can I move on</Text>
  </div>,
  <div key='i'>
    <Text textColor='white'>You are covered with an invisibility cloak</Text>
  </div>,
  <div key='j'>
    <Text textColor='white'>You can only be seen by a few others</Text>
  </div>,
  <YellowLinkDiv key='k'>
    <Text textColor='white'><Link to='/h/5'>You</Link> are the other</Text>
  </YellowLinkDiv>,
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
      window.scrollTo(0,document.body.scrollHeight)
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
      <Block position={2}>
        {this.state.lines}
      </Block>
    )
  }
}

export default C;
