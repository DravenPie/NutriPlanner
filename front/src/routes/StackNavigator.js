import Header from '@components/Header'
import LoginScreen from '@pages/LoginScreen';
import SignUpScreen from '@pages/SignUpScreen';
import TopTabNavigator from './TopTabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const StackNavigator = ({ initialRouteName='LoginScreen' }) => {
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
        initialParams={{ initialRouteName: 'ProfileScreen' }}
        options={{
          header: () => <Header/>,
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator;
