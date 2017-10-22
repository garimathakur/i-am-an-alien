import React, { Component } from 'react';
import styled from 'styled-components';
import Words from './Words';

const SceneContainer = styled.div`
  background-color: rgba(81,28,17,1);
  height: 100%;
  width: 100%;
`;

const SceneLabel = styled.p`
  position: fixed;
`;

const Scene = ({ match }) => {
  const thing = require(`./scenes/${match.params.sceneId}`).default;
  return <SceneContainer>{thing.content()}</SceneContainer>
};

export default Scene;
