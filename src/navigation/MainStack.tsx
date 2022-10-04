import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LoginScreen } from '../screens/login';
import { ListScreen } from '../screens/list';
import { ProfileScreen } from '../screens/profile';

export const Stack = createNativeStackNavigator();

export const MainStack = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="List" component={ListScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
  </Stack.Navigator>
);
