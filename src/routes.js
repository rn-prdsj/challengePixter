import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Pages
import List from './pages/List';
import Details from './pages/Details';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator mode={'modal'} initialRouteName="List">
        <Stack.Screen
          name="List"
          component={List}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
