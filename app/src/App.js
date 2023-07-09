import { initializeFoodList, initializeUserData } from '../api';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import StackNavigator from 'routes/StackNavigator';
import { colors } from 'styles/colors';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    initializeUserData();
    initializeFoodList();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.white }}>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
