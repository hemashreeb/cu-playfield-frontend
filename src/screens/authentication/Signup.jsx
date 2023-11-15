import React from 'react';
import {SafeAreaView, Text, ScrollView, View, StyleSheet} from 'react-native';
import {Button, Input, Icon} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Signup = () => {
  const submitForm = () => {
    console.log('Form Submitted');
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Text style={styles.header}>CU PlayField</Text>
        <View style={styles.content}>
          <Input placeholder="Enter your name" />
          <Input placeholder="Enter your email" />
          <Input placeholder="Enter USN" />
          <Input placeholder="Enter department" />
          <Input placeholder="Password" secureTextEntry={true} />
          <Input placeholder="Confirm password" secureTextEntry={true} />
          <Button
            title={'Sign Up'}
            // eslint-disable-next-line react-native/no-inline-styles
            containerStyle={{
              marginHorizontal: 10,
              marginVertical: 10,
            }}
            onPress={submitForm}
          />
          <Button
            title="Sign In"
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
              marginBottom: 50,
            }}
          />
        </View>
      </ScrollView>
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

export default Signup;
