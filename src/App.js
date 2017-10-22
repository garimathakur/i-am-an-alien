import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
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
      <Router basename='/i-am-an-alien'>
        <AppContainer>
          <Route exact path="/" render={() => (<Redirect to='/0'/>)}/>
          <Route path='/:sceneId' component={Scene}/>
        </AppContainer>
      </Router>
    );
  }
}

export default App;
