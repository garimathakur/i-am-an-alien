import React, { Component } from 'react';
import { Block, Text, Link } from '../elements';
import styled from 'styled-components';

const Spacer = styled.div`
  height: 48px;
`;

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      yous: [<Text><Link to='/c/7'>you</Link></Text>],
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.addYou();
    }, 500);
  }

  componentDidUpdate() {
    setTimeout(() => {
      this.addYou();
    }, 500);
  }

  addYou = () => {
    const { yous } = this.state;
    if (yous.length < 20) {
      const newYous = yous.length === 1 ?
        yous.push(<Text textColor='pink'>you</Text>) :
        yous.unshift(<Text textColor='pink'>you</Text>);
      this.setState({
        yous: yous
      });
    }
  }

  render() {
    return (
      <Block>
        {this.state.yous}
      </Block>
    )
  }
}

export default C;
