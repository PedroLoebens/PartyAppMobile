import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import ButtonNew from "../ButtonNew";
import { Entypo, Feather } from '@expo/vector-icons';
import {
   HomeNavigation,
   NewNavigation,
   SearchNavigation
} from './StackNavigation';

const Tab = createMaterialBottomTabNavigator()

export default function ShowBottomTabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, unmountOnBlur: true }} barStyle={{ backgroundColor: '#ffffff', borderTopWidth: 1, borderColor: '#a6a6a6' }}>
      <Tab.Screen name="Home" component={HomeNavigation} 
      options={{
        tabBarIcon: ({ color }) => (
          <Entypo name="home" size={20} color={color} />
        ),
      }}/>

      <Tab.Screen name="New" component={NewNavigation} 
      options={{
        tabBarLabel: '',
        tabBarIcon: () => (
          <ButtonNew size={20} color={'#ffffff'} />
        ),
      }}/>

      <Tab.Screen name="Search" component={SearchNavigation} 
      options={{
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={20} color={color} />
        ),
      }}/>
    </Tab.Navigator>
  )
}
