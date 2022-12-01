import { View, Text, StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  CalorieTracker from './CalorieTracker';
import WeightTracker from './WeightTracker';
import Profile from './Profile';

const Stack = createNativeStackNavigator();

export default function ProfileNavigator () {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Profile" children= { () => <Profile/> }/>
      <Stack.Screen name="Weight Tracker" children={ () => <WeightTracker/> }/>
      <Stack.Screen name="Calorie Tracker" children={ () => <CalorieTracker/> }/>
    </Stack.Navigator>
  )
}