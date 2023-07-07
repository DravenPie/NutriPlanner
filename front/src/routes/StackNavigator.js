import Header from '@components/General/Header'
import LoginScreen from '@pages/LoginScreen';
import SelectionScreen from '@components/ProfileScreen/SelectionScreen';
import SignUpScreen from '@pages/SignUpScreen';
import TopbarNavigator from './TopBarNavigator';
import { colors } from '@styles/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

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
        name='ActivityLevelScreen'
        component={SelectionScreen}
        options={{
          headerStyle: { backgroundColor: colors.mediumGreen },
          headerTintColor: colors.black,
          headerTitle: 'Nível de atividade'
        }}
      />
      <Stack.Screen
        name='GoalScreen'
        component={SelectionScreen}
        options={{
          headerStyle: { backgroundColor: colors.mediumGreen },
          headerTintColor: colors.black,
          headerTitle: 'Objetivo'
        }}
      />
      <Stack.Screen
        name='DietTypeScreen'
        component={SelectionScreen}
        options={{
          headerStyle: { backgroundColor: colors.mediumGreen },
          headerTintColor: colors.black,
          headerTitle: 'Tipo de dieta'
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator;
