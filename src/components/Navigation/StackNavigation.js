import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { 
  Home,
  New, 
  Search,
  Login,
  SignUp 
} from '../../routes';
import ShowBottomTabs from "./BottomTabs";

const Stack = createNativeStackNavigator();

export default function InitialNavigator() {
  return(
    <Stack.Navigator 
      initialRouteName='Login'
    >
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />
      <Stack.Screen name="SignUp" component={SignUp} options={{title:"", headerStyle:{backgroundColor:"#ffffff", borderBottomWidth: 0}, headerTintColor:'#000000', headerTitleStyle:{alignSelf:'center', fontSize: 15}}}/>
      <Stack.Screen name="Home" component={ShowBottomTabs} options={{headerShown:false}}/>
    </Stack.Navigator>
  );
}

export function HomeNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeStack" component={Home}/>
    </Stack.Navigator>
  );
}

export function NewNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}> 
      <Stack.Screen name="NewStack" component={New}/>
    </Stack.Navigator>
  );
}

export function SearchNavigation() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchStack" component={Search}/>
    </Stack.Navigator>
  );
}
