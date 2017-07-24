import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LandingPage from './containers/LandingPage';

const RouterComponent = () => (
  <Router sceneStyle={{ paddingTop: 65 }}>
    <Scene key="home">
      <Scene
        key="landingPage"
        component={LandingPage}
        hideNavBar
        initial
      />
    </Scene>
  </Router>
);

export default RouterComponent;
