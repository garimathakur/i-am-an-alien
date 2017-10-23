import React from 'react';
import styled from 'styled-components';

const SceneContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Scene = ({ match, history }) => {
  const ThisScene = require(`./scenes/${match.params.sceneId}`).default;
  return <SceneContainer><ThisScene history={history}/></SceneContainer>
};

export default Scene;
