import { Text, View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Profile () {
  const navigation = useNavigation<any>();

  return (
    <View>
      <Button
        title= "Weight Tracker"
        onPress= { ()=> navigation.navigate("Weight Tracker") }
      />
      <Button
        title= "Calorie Tracker"
        onPress= { () => navigation.navigate('Calorie Tracker') }
      />
    </View>
  )
}