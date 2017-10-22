import React from 'react';
import styled from 'styled-components';

const SceneContainer = styled.div`
  background-color: rgba(81,28,17,1);
  height: 100%;
  width: 100%;
`;

const Scene = ({ match }) => {
  const ThisScene = require(`./scenes/${match.params.sceneId}`).default;
  return <SceneContainer><ThisScene/></SceneContainer>
};

export default Scene;
