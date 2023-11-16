import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {Provider} from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

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
    <BottomTabNavigator.Navigator
      initialRouteName="MainRoute"
      activeColor="#000000"
      inactiveColor="#ffffff"
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{backgroundColor: 'steelblue'}}>
      <BottomTabNavigator.Screen
        name="Home"
        component={Dashboard}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={28} />
          ),
        }}
      />
      <BottomTabNavigator.Screen
        name="Authenticate"
        component={AuthNavigator}
        options={{
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="account" color={color} size={28} />
          ),
        }}
      />
    </BottomTabNavigator.Navigator>
  );
};

const App = props => {
  return (
    <Provider>
      <NavigationContainer>
        <BottomsTabNavigator />
      </NavigationContainer>
    </Provider>
  );
};

// const styles = StyleSheet.create({

// });

export default App;
