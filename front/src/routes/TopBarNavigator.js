import { BookIcon, CalendarIcon, ClipboardIcon, PieChartIcon, UserIcon } from '@components/Icons';

import DailyProgressScreen from '@pages/DailyProgressScreen';
import DailyRequirementsScreen from '@pages/DailyRequirementsScreen';
import HistoryScreen from '@pages/HistoryScreen';
import LibraryScreen from '@pages/LibraryScreen';
import ProfileScreen from '@pages/ProfileScreen';
import { View } from 'react-native';
import { colors } from '@styles/colors';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { verticalScale } from '@styles/metrics';

const Tab = createMaterialTopTabNavigator();

const TopBarNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { backgroundColor: colors.mediumGreen, height: verticalScale(50) },
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.white,
        tabBarIndicatorStyle: { backgroundColor: colors.darkGreen, height: verticalScale(5) },
      }}
      // tabBar={() => <View style={{ display: 'none' }}/>}
    >
      <Tab.Screen
        name='ProfileScreen'
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => <UserIcon size={size} color={color} />,
          tabBarLabel: () => <View style={{ display: 'none' }} />
        }}
      />
      <Tab.Screen
        name='LibraryScreen'
        component={LibraryScreen}
        options={{
          tabBarIcon: ({ size, color }) => <BookIcon size={size} color={color} />,
          tabBarLabel: () => <View style={{ display: 'none' }} />,
          tabBarOptions: { showLabel: false }
        }}
      />
      <Tab.Screen
        name='DailyRequirementsScreen'
        component={DailyRequirementsScreen}
        options={{
          tabBarIcon: ({ size, color }) => <ClipboardIcon size={size} color={color} />,
          tabBarLabel: () => <View style={{ display: 'none' }} />
        }}
      />
      <Tab.Screen
        name='DailyProgressScreen'
        component={DailyProgressScreen}
        options={{
          tabBarIcon: ({ size, color }) => <PieChartIcon size={size} color={color} />,
          tabBarLabel: () => <View style={{ display: 'none' }} />
        }}
      />
      <Tab.Screen
        name='HistoryScreen'
        component={HistoryScreen}
        options={{
          tabBarIcon: ({ size, color }) => <CalendarIcon size={size} color={color} />,
          tabBarLabel: () => <View style={{ display: 'none' }} />
        }}
      />
    </Tab.Navigator>
  );
}

export default TopBarNavigator;
