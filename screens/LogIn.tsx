import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

export default function LogIn ( { setLogin }: { setLogin: Function }) {

  const [userName, setUsername] = useState<string>('')

  const handleChange = (event: string) => {
    setUsername(event)
  }

  const handleSubmit = () => {
    setLogin(true)
  }

  return (
    <View style= {styles.container}>
      <Text> This is the Log In Page </Text>
      <TextInput
        style ={styles.input}
        onChangeText= {handleChange}
      />
      <Button
        title='Press Me To Log In Cutie'
        onPress ={handleSubmit}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    width: 300,
    borderWidth: 1,
    padding: 10,
  },
})