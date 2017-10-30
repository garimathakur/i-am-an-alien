import React from 'react';
import styled from 'styled-components';

const SceneContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Scene = ({ match, history }) => {
  const { a, b } = match.params;
  const ThisScene = b ? require(`./scenes/${a}/${b}`).default : require(`./scenes/${a}`).default;
  return <SceneContainer><ThisScene history={history}/></SceneContainer>
};

export default Scene;
