import React, { Component } from 'react';
import {
  HashRouter as Router,
  // BrowserRouter as Router,
  Route,
  Redirect,
  withRouter,
} from 'react-router-dom';
import styled from 'styled-components';
import Scene from './Scene';

const AppContainer = styled.div`
  height: 100%;
  width: 100%;
`;

class ScrollToBottom extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0,document.body.scrollHeight)
    }
  }

  render() {
    return this.props.children
  }
}

const STB = withRouter(ScrollToBottom);

class App extends Component {
  render() {
    return (
      <Router basename='/i-am-an-alien'>
        <STB>
          <AppContainer>
            <Route exact path="/" render={() => (<Redirect to='/a/0'/>)}/>
            <Route path='/:a/:b' component={Scene}/>
          </AppContainer>
        </STB>
      </Router>
    );
  }
}

export default App;
