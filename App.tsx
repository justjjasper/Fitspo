import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useState } from 'react';
import LogIn from './screens/LogIn';
import BottomTabNavigator from './screens/BottomNavigator';

const Stack = createNativeStackNavigator();

export default function App() {
  const [login, setLogin] = useState<boolean>(false)

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {login ? (
          <Stack.Screen
            name = "Bottom Navigators"
            children= { () => <BottomTabNavigator/> }
          />
        ) : (
          <Stack.Screen
            name="Log In"
            children={ () =>
              <LogIn
              setLogin={setLogin}/>
            }
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// <View style={styles.container}>
//       <Text>Open up App.tsx to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>