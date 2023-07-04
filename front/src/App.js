import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import StackNavigator from 'routes/StackNavigator';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
