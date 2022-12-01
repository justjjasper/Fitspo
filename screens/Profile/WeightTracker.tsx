import { Text, View, StyleSheet } from 'react-native';

export default function WeightTracker() {
  return (
    <View style={styles.container}>
      <Text> I weight 157lbs </Text>
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