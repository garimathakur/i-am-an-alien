import React, { Component } from 'react';
import { Block, Text, Link } from '../elements';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 48px;
`;

const allLines = [
  <div key='a'>
    <Text>A land made of aliens</Text>
    <Text>We are all in this together</Text>
  </div>,
  <div key='b'>
    <Text>But we are not in this together</Text>
    <Text>You start to travel to the land of glass</Text>
  </div>,
  <div key='c'>
    <Text>Everyone has walls of glass</Text>
    <Text>Every one lives inside walls of glass</Text>
  </div>,
  <div key='d'>
    <Text>They think you are scratching on their walls</Text>
  </div>,
  <div key='e'>
    <Text>They think you are snatching their sleep and sucking blood from their lands to survive</Text>
  </div>,
  <div key='f'>
    <Text>“Where do you think you got this car from?</Text>
    <Text>Aren’t you done sucking up all the resources, a men yelled coming in the opposite direction on a one way street when <Link to='/h/5'>you</Link> honked at him”</Text>
  </div>,
  <div key='g'>
    <Text>Are you done?</Text>
  </div>,
  <div key='h'>
    <Text>Can I move on? no?</Text>
  </div>,
  <div key='i'>
    <Text>You are covered with an</Text>
    <Text>invisibility cloak</Text>
    <Text>You can only be seen by a few others</Text>
    <Text>You are the other</Text>
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
      <Block position={2}>
        {this.state.lines}
      </Block>
    )
  }
}

export default C;
