import { initializeDailyProgress, initializeFoodList, initializeUserData } from '../api';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackNavigator from 'routes/StackNavigator';
import { StatusBar } from 'react-native';
import { colors } from 'styles/colors';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    initializeUserData();
    initializeFoodList();
    initializeDailyProgress();
  }, []);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <StackNavigator />
        </NavigationContainer>
      </SafeAreaView>
      <StatusBar barStyle="dark-content" backgroundColor={colors.white} />
    </>
  );
}

export default App;
