import React from 'react';
import { Block, Text, Link } from '../elements';
import styled, { keyframes } from 'styled-components';
import colors from '../elements/colors';

const randomNumInRange = (max, min) => Math.random() * (max - min) + min;
const randomIntInRange = (max, min) => Math.floor(randomNumInRange(max, min));

const padding = 200;

const GrowingSelf = styled(Text)`
  top: ${props => randomNumInRange(padding, window.innerHeight - (window.innerHeight * 0.3) - padding)}px;
  left: ${props => randomNumInRange(padding, window.innerWidth - padding)}px;
  transform-origin: center center;
  position: fixed;
  transform: rotate(90deg) scale(${props => randomNumInRange(1.1, 0.1)});
`;

const RegularSpan = styled.span`
  float: left;
  color: ${props => colors[props.textColor]};
`;

const HangingSpan = styled.span`
  color: ${props => colors[props.textColor]};
  float: left;
  transform: rotate(90deg);
  margin-top: 20px;
`;

RegularSpan.defaultProps = {
  textColor: 'yellow',
};

const NextBlock = styled(Block)`
  line-height: 40px;
`;

const Component = (props) => (
  <Block>
    <RegularSpan>Your sense of </RegularSpan><HangingSpan textColor='yellow'>{props.selfLink ? <Link to="/b/0"> self</Link> : 'self'}</HangingSpan><RegularSpan>and <Link to="/c/0">time</Link> is broken</RegularSpan>
    <GrowingSelf key={'a'}>self</GrowingSelf>
    <GrowingSelf key={'b'}>self</GrowingSelf>
    <GrowingSelf key={'c'}>self</GrowingSelf>
    <GrowingSelf key={'d'}>self</GrowingSelf>
  </Block>
);

Component.defaultProps = {
  selfLink: true,
}

export default Component;
