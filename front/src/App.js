import Home from './pages/Home';
import LoginScreen from './pages/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import SignUpScreen from 'pages/SignUpScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='LoginScreen'>
          <Stack.Screen
            name='LoginScreen'
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='SignUpScreen'
            component={SignUpScreen}
            // options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Home'
            component={Home}
            // options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
