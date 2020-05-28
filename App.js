import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  let counter = 1;
  console.log('rendered')
  return (
    <View style={styles.container}>
      <Text style={styles.adwhaleLogo}>I am an app</Text>
      <Text>{counter}</Text>
      <Text>Alex's first app</Text>
      <Button 
        title="Add"
        onPress={e => console.log('clicked')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  adwhaleLogo: {
    color: "blue",
    fontSize: 60
  }
});
