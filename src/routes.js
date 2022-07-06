import React from "react";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons';

import Home from './pages/Home.js';
import Search from './pages/Search.js';
import New from './pages/New.js';

import ButtonNew from "./components/ButtonNew";

const Tab = createMaterialBottomTabNavigator();

export default function Routes(){
   return(
      <Tab.Navigator
      barStyle={{ 
         backgroundColor: '#ffffff',
         borderTopWidth: 1,
         borderColor: '#a6a6a6',
         backBehavior: 'history'
      }}
      >
         <Tab.Screen 
         name="Home" 
         component={Home} 
         options={{
            tabBarIcon: ({ color }) => (
               <Entypo name="home" size={20} color={color} />
            ),
         }} 
         />

         <Tab.Screen 
         name="New" 
         component={New}
         options={{
            tabBarLabel: '',
            tabBarIcon: () => (
               <ButtonNew size={20} color={'#ffffff'} />
            ),
         }} 
         />

         <Tab.Screen 
         name="Buscar" 
         component={Search} 
         options={{
            tabBarIcon: ({ color }) => (
               <Feather name="search" size={20} color={color} />
            ),
         }}
         />

      </Tab.Navigator>
   )
}
