import React from 'react';
import {SafeAreaView, Text, StyleSheet} from 'react-native';

const Dashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
  },
});

export default Dashboard;
