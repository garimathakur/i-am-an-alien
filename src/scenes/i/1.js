import React, { Component } from 'react';
import { Block, Text, Link, SuperBlock } from '../elements';
import styled, { keyframes } from 'styled-components';
import colors from '../elements/colors';
import scrollToComponent from 'react-scroll-to-component';

const BaskervilleDiv = styled.div`
  font-weight: normal;
  font-family: 'Libre Baskerville', 'serif';
  padding-right: 3vw;
`;

const vals = {
  work: <BaskervilleDiv><Text italic>In case of fire, break the glass and run with your papers</Text><Text italic>If you lose your job, you will be deported in the next 30 days FIRE FIRE FIRE</Text></BaskervilleDiv>,
  sleep: <BaskervilleDiv><Text italic>You can’t sleep</Text><Text italic>You can’t wake up</Text></BaskervilleDiv>,
  touch: <BaskervilleDiv><Text italic>Everyone will only touch you through their glass walls</Text></BaskervilleDiv>,
  exist: <BaskervilleDiv><Text italic>You are loosing pieces of your self</Text><Text italic>Can you gather them?</Text></BaskervilleDiv>,
  speak: <BaskervilleDiv><Text italic>You can speak but you have no voice</Text></BaskervilleDiv>,
  travel: <BaskervilleDiv style={{paddingBottom: '5%'}}><Text italic>You are traveling to a land of brown dirt like hair, volcanoes of cheese, streams of turmeric lattes, cardamom chai shakes and droids consuming them</Text><Text italic>Droids can be flexed with the new yoga training exercises</Text></BaskervilleDiv>,
};

const TopDiv = styled.div`
  height: 145%;
  width: 100%;
`;

const LeftDiv = styled.div`
  height: 100%;
  font-weight: normal;
  font-family: 'Libre Baskerville', 'serif';
  display: inline-block;
  width: calc(55% - 1px);
  p {
    position: relative;
    float: right;
  }
`;

const RightDiv = styled.div`
  font-weight: normal;
  font-family: 'Libre Baskerville', 'serif';
  position: absolute;
  display: inline-block;
  width: 45%;
  padding-bottom: 5%;
  p {
    margin-left: 5px;
    position: relative;
  }
  a {
    color: ${colors.pink}
  }
`;

const ContainingDiv = styled.div`
  margin-top: 5%;
  height: 35%;
  width: 100%;
`;

class C extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showWork: false,
      showSleep: false,
      showTouch: false,
      showExist: false,
      showSpeak: false,
      showTravel: false,
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0)
  }

  componentDidUpdate() {
    const {
      showWork,
      showSleep,
      showTouch,
      showExist,
      showSpeak,
      showTravel,
    } = this.state;

    if (showWork && showSleep && showTouch && showExist && showSpeak && showTravel) {
      setTimeout(() => {
        this.props.history.push('/i/2');
      }, 20000);
    }
  }

  addText = (key) => {
    this.setState({
      [key]: true,
    });
    setTimeout(() => {
      scrollToComponent(this.refs.rightdiv, {
        align: 'bottom'
      })
    }, 5);
  }

  render() {
    return (
      <ContainingDiv>
        <LeftDiv><Text>you are an alien allowed to</Text></LeftDiv>
        <RightDiv ref='rightdiv'>
          <Text><a style={{cursor: 'pointer'}} onClick={() => this.addText('showWork')}>Work</a></Text>
          {this.state.showWork ? vals.work : null}
          <Text><a style={{cursor: 'pointer'}} onClick={() => this.addText('showSleep')}>Sleep</a></Text>
          {this.state.showSleep ? vals.sleep : null}
          <Text><a style={{cursor: 'pointer'}} onClick={() => this.addText('showTouch')}>Touch</a></Text>
          {this.state.showTouch ? vals.touch : null}
          <Text><a style={{cursor: 'pointer'}} onClick={() => this.addText('showExist')}>Exist</a></Text>
          {this.state.showExist ? vals.exist : null}
          <Text><a style={{cursor: 'pointer'}} onClick={() => this.addText('showSpeak')}>Speak</a></Text>
          {this.state.showSpeak ? vals.speak : null}
          <Text style={this.state.showTravel ? null : {paddingBottom: '5%'}}><a style={{cursor: 'pointer'}} onClick={() => this.addText('showTravel')}>Travel</a></Text>
          {this.state.showTravel ? vals.travel : null}
        </RightDiv>
      </ContainingDiv>
    )
  }
}

export default C;
