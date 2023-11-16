import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {Button, Input} from '@rneui/themed';

import Signup from './Signup';

const Login = ({navigation}) => {
  return (
    <SafeAreaView style={styles.grid}>
      <View style={styles.container}>
        <Text style={styles.header}>CU PlayField</Text>
        <View style={styles.content}>
          <Input placeholder="Enter Email" />
          <Input placeholder="Password" secureTextEntry={true} />
          <Button
            title={'Login'}
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{
              marginHorizontal: 10,
              marginVertical: 10,
            }}
          />
          <Button
            title="Sign Up"
            // eslint-disable-next-line react-native/no-inline-styles
            buttonStyle={{
              borderColor: 'rgba(78, 116, 289, 1)',
            }}
            type="outline"
            // eslint-disable-next-line react-native/no-inline-styles
            titleStyle={{color: 'rgba(78, 116, 289, 1)'}}
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{
              marginHorizontal: 10,
              marginVertical: 10,
            }}
            onPress={() => navigation.navigate(Signup)}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
    justifyContent: 'center',
  },
  container: {
    padding: 40,
  },
  header: {
    fontSize: 28,
    color: 'steelblue',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginVertical: 25,
  },
});

export default Login;
