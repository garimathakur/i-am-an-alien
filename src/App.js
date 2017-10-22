import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import Scene from './Scene';

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;

class App extends Component {
  render() {
    return (
      <Router>
        <AppContainer>
          <Route path="/:sceneId" component={Scene}/>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
