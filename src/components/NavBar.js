import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from '../routes';

export function Navbar() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}