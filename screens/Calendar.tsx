import { StyleSheet, View, Text } from 'react-native';

export default function Calendar () {
  return (
    <View style={styles.container}>
      <Text> Calendar Views BB </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})