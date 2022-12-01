import { View, Text, StyleSheet } from 'react-native';

export default function CalorieTracker () {
  return (
    <View style= {styles.container}>
      <Text> I consume about 1800 calories per day </Text>
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