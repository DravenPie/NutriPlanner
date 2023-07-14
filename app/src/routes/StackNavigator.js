import { BackArrow } from 'components/General/Icons';
import Header from '@components/General/Header'
import SelectionScreen from '@components/ProfileScreen/SelectionScreen';
import StackHeader from 'components/General/StackHeader';
import TopbarNavigator from './TopBarNavigator';
import { colors } from '@styles/colors';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { moderateScale } from 'styles/metrics';

const Stack = createNativeStackNavigator();

/**
 * StackNavigator component
 * @returns {JSX.Element} - StackNavigator component
 */
const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShadowVisible: false,
        headerTintColor: colors.darkGrey,
        headerStyle: { backgroundColor: colors.white },
        headerTitle: '',
      }}
    >
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
          header: ({ navigation }) => (
            <StackHeader
              title={'Nível de atividade'}
              leftButton={
                <BackArrow
                  size={moderateScale(25)}
                  color={colors.white}
                  onPress={navigation.goBack}
                />
              }
            />
          )
        }}
      />
      <Stack.Screen
        name='GoalScreen'
        component={SelectionScreen}
        options={{
          header: ({ navigation }) => (
            <StackHeader
              title={'Objetivo'}
              leftButton={
                <BackArrow
                  size={moderateScale(25)}
                  color={colors.white}
                  onPress={navigation.goBack}
                />
              }
            />
          )
        }}
      />
      <Stack.Screen
        name='DietTypeScreen'
        component={SelectionScreen}
        options={{
          header: ({ navigation }) => (
            <StackHeader
              title={'Tipo de dieta'}
              leftButton={
                <BackArrow
                  size={moderateScale(25)}
                  color={colors.white}
                  onPress={navigation.goBack}
                />
              }
            />
          )
        }}
      />
    </Stack.Navigator>
  )
}

export default StackNavigator;
