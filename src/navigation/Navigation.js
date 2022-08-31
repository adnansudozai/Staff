import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainStack from './MainStack';
// import Drawer from './Drawer';
const Navigation = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default Navigation;
