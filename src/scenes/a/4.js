import React from 'react';
import { Block, Text, Link } from '../elements';
import styled, { keyframes } from 'styled-components';
import colors from '../elements/colors';

const randomNumInRange = (max, min) => Math.random() * (max - min + 1) + min;
const randomIntInRange = (max, min) => Math.floor(randomNumInRange(max, min));

const scales = Array.apply(null, Array(4)).map(() => {
  return keyframes`
  	from {
  		transform: scale(0);
  	}

  	to {
  		transform: scale(${randomNumInRange(0.5, 5)});
  	}
  `;
});

const padding = 200;

const GrowingSelf = styled(Text)`
  top: ${props => randomNumInRange(padding, window.innerHeight - padding)}px;
  left: ${props => randomNumInRange(padding, window.innerWidth - padding)}px;
  transform-origin: center center;
  position: fixed;
  transform: rotate(90deg);
  animation: scale(${props => randomNumInRange(0.5, 5)}) 0.7s ease 0s 1 normal forwards;
`;

const RegularSpan = styled.span`
  float: left;
  color: ${props => colors[props.textColor]};
`;

const HangingSpan = styled.span`
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

const Component = () => (
  <Block>
    <RegularSpan>Your sense of </RegularSpan><HangingSpan><Link to="/b/0"> self</Link></HangingSpan><RegularSpan>and <Link to="/c/0">time</Link> is broken</RegularSpan>
    <GrowingSelf key={'a'}>self</GrowingSelf>
    <GrowingSelf key={'b'}>self</GrowingSelf>
    <GrowingSelf key={'c'}>self</GrowingSelf>
    <GrowingSelf key={'d'}>self</GrowingSelf>
  </Block>
);

export default Component;
