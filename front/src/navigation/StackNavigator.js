import Header from 'components/HomeScreen/Header'
import LoginScreen from '@pages/LoginScreen';
import SignUpScreen from '@pages/SignUpScreen';
import TopTabNavigator from './TopTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = ({ initialRouteName }) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName}>
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUpScreen'
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='HomeScreen'
        component={TopTabNavigator}
        initialParams={{ initialRouteName: 'Home' }}
        options={{
          header: (props) => (<Header/>),
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator;
