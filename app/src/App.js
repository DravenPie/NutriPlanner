import { initializeDailyProgress, initializeFoodList, initializeUserData } from '../api';

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import StackNavigator from 'routes/StackNavigator';
import { StatusBar } from "expo-status-bar";
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    initializeUserData();
    initializeFoodList();
    initializeDailyProgress();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default App;
