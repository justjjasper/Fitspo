import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from './Home';
import Calendar from './Calendar';
import ProfileNavigator from './Profile/ProfileNavigator';

const Bottom = createBottomTabNavigator();

export default function BottomTabNavigator () {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name ="Home" children={ () => <Home/> } />
      <Bottom.Screen name ="Calendar" children={ () => <Calendar/> } />
      <Bottom.Screen name ="Profile" children= { () => <ProfileNavigator/> } />
    </Bottom.Navigator>
  )
}