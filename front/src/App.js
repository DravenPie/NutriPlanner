import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import StackNavigator from 'navigation/StackNavigator';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigator
          initialRouteName={'LoginScreen'}
        />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
