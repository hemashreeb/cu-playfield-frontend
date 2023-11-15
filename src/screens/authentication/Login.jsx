import React from 'react';
import {SafeAreaView, Text, View, StyleSheet, Alert} from 'react-native';
import {Button, Input, Icon} from '@rneui/themed';
import {SafeAreaProvider} from 'react-native-safe-area-context';

const Login = () => {
  //const [value, setValue] = useState(0);
  const submitForm = () => {
    Alert('Form Submitted');
  };

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
            onPress={submitForm}
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
