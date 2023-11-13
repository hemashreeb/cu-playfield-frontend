import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const Login = () => {
  //const [value, setValue] = useState(0);
  const submitForm = () => {
    console.log('Form Submitted');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.header}>Login Form</Text>
      </View>
      <TextInput style={styles.input} placeholder="Enter Email" />
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Enter Password"
      />
      <Button style={styles.button} title="Submit" onPress={submitForm} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    display: 'flex',
  },
  header: {
    fontSize: 40,
    alignSelf: 'center',
  },
  input: {
    paddingTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
  },
  button: {
    backgroundColor: 'blue',
  },
});

export default Login;
