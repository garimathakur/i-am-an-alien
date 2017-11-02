import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from '../elements';
import styled, { keyframes } from 'styled-components';
import colors from '../elements/colors';

const LeftDiv = styled.div`
  font-weight: normal;
  font-family: 'Libre Baskerville', 'serif';
  display: inline-block;
  width: calc(55% - 1px);
  height: 100%;
  p {
    position: relative;
    float: right;
    top: 33%;
  }
`;

const RightDiv = styled.div`
  font-weight: normal;
  font-family: 'Libre Baskerville', 'serif';
  position: absolute;
  display: inline-block;
  width: 45%;
  height: 100%;
  p {
    top: 33%;
    margin-left: 5px;
    position: relative;
  }
  a {
    color: ${colors.pink}
  }
`;

const ContainingDiv = styled.div`
  height: 100%;
  width: 100%;
`;

class C extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ContainingDiv>
        <LeftDiv><Text>you are an alien allowed to</Text></LeftDiv>
        <RightDiv>
          <Text><Link to='/'>Work</Link></Text>
          <Text><Link to='/'>Sleep</Link></Text>
          <Text><Link to='/'>Touch</Link></Text>
          <Text><Link to='/'>Exist</Link></Text>
          <Text><Link to='/'>Speak</Link></Text>
          <Text><Link to='/'>Travel</Link></Text>
        </RightDiv>
      </ContainingDiv>
    )
  }
}

export default C;
