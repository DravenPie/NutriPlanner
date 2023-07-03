import Home from '@pages/Home';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

const TopTabNavigator = ({ initialRouteName }) => {
  return (
    <Tab.Navigator initialRouteName={initialRouteName}>
      <Tab.Screen name='Home' component={Home} />
    </Tab.Navigator>
  )
}

export default TopTabNavigator;
