import React, { Component } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Text = styled.p`
  color: yellow;
`;

const HyperLink = styled(NavLink)`
  &:link: {
    color: red;
  }
  &:visited: {
    color: red;
  }
`;

class Scene extends Component {
  stripAndRender() {
    console.log('this.props.children', this.props.children);
    // const allText = this.props.children
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

const allTheScenes = [
  <Text><HyperLink to="/1">cities</HyperLink> without <HyperLink to="/8">citizens</HyperLink></Text>,
  <Text>We are all <HyperLink to="/2">migrants</HyperLink> through <HyperLink to="/4">time</HyperLink></Text>,
  <div>
    <Text>Carry all immigration paper</Text>
    <Text>with yourself at all <HyperLink to="/3">times</HyperLink></Text>
  </div>,
  <div>
    <HyperLink to="/6">If you are travelling without</HyperLink>
    <HyperLink to="/6">your papers, your existence cannnot</HyperLink>
    <HyperLink to="/6">be verified and you will be deported</HyperLink>
    <HyperLink to="/6">back to the land of your fear</HyperLink>
  </div>,
  <Text>Your sense of <HyperLink to="/5">self</HyperLink> and <HyperLink to="/0">time</HyperLink> is broken</Text>,
  <HyperLink to="/6">Your body is horrific and harmful</HyperLink>,
  <Scene><Text>Your sense of <HyperLink to="/5">self</HyperLink> and <HyperLink to="/0">time</HyperLink> is broken</Text></Scene>
];

const noScene = <Text><HyperLink to="/0">This scene does not exist</HyperLink></Text>;

const scenes = (sceneId) => allTheScenes[sceneId] ? allTheScenes[sceneId] : noScene;

export default scenes;
