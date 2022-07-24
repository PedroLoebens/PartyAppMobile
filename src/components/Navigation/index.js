import React from "react";
import InitialNavigator from './StackNavigation';
import { NavigationContainer } from "@react-navigation/native";

export default props => (
  <NavigationContainer>
    <InitialNavigator />
  </NavigationContainer>
);
