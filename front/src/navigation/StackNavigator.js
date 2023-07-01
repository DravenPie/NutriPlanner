import Home from '@pages/Home';
import LoginScreen from '@pages/LoginScreen';
import SignUpScreen from '@pages/SignUpScreen';
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
        name='Home'
        component={Home}
      // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator;
