import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Dashboard from './src/screens/Dashboard/Dashboard';
import Login from './src/screens/authentication/Login';
import Signup from './src/screens/authentication/Signup';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Login" component={Login} />
        <Tab.Screen name="SignUp" component={Signup} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

// const styles = StyleSheet.create({

// });

export default App;
