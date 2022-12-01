import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function Home () {
  return (
    <View style= {styles.container}>
      <Text> Hello Home Screen </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
})