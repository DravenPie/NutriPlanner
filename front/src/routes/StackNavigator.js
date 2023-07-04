import Header from '@components/Header'
import LoginScreen from '@pages/LoginScreen';
import SelectionScreen from '@components/ProfileScreen/SelectionScreen';
import SignUpScreen from '@pages/SignUpScreen';
import TopbarNavigator from './TopBarNavigator';
import { colors } from '@styles/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { verticalScale } from 'styles/metrics';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: colors.darkGrey,
        headerStyle: { backgroundColor: colors.lightGreen },
        headerTitle: '',
      }}
    >
      <Stack.Screen
        name='LoginScreen'
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='SignUpScreen'
        component={SignUpScreen}
      />
      <Stack.Screen
        name='Home'
        component={TopbarNavigator}
        options={{
          header: () => <Header />,
        }}
      />

      <Stack.Screen
        name='SexSelectionScreen'
        component={SelectionScreen}
        options={{
          headerStyle: { backgroundColor: colors.mediumGreen },
          headerTintColor: colors.black,
          headerTitle: 'Sexo'
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator;
