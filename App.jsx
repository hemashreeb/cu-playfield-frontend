import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

import Dashboard from './src/screens/Dashboard/Dashboard';
import Login from './src/screens/authentication/Login';
import Signup from './src/screens/authentication/Signup';

const AuthStackNavigator = createNativeStackNavigator();
const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator>
      <AuthStackNavigator.Screen
        options={{headerShown: false}}
        name="Login"
        component={Login}
      />
      <AuthStackNavigator.Screen
        options={{headerShown: false}}
        name="Signup"
        component={Signup}
      />
    </AuthStackNavigator.Navigator>
  );
};

const BottomTabNavigator = createMaterialBottomTabNavigator();
const BottomsTabNavigator = () => {
  return (
    <BottomTabNavigator.Navigator>
      <BottomTabNavigator.Screen
        options={{headerShown: false}}
        name="Dashboard"
        component={Dashboard}
      />
      <BottomTabNavigator.Screen
        options={{headerShown: false}}
        name="Authenticate"
        component={AuthNavigator}
      />
    </BottomTabNavigator.Navigator>
  );
};

const App = props => {
  return (
    <>
      <NavigationContainer>
        <BottomsTabNavigator />
      </NavigationContainer>
    </>
  );
};

// const styles = StyleSheet.create({

// });

export default App;
