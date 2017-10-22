import React, { Component } from 'react';
import styled from 'styled-components';
import scenes from './scenes';

const positions = [
  {
    top: '30%',
    left: '50%',
  },
];

const WordsContainer = styled.div`
  font-family: serif;
  position: relative;
  top: ${props => positions[props.position].top};
  left: ${props => positions[props.position].left};
`;

const Words = ({ sceneId }) => (
  <WordsContainer position={0}>
    {scenes(sceneId)}
  </WordsContainer>
);

export default Words;
