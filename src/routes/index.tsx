import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { stacks } from './stackScreens';

const Stack = createNativeStackNavigator();

const Routes = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName='home' screenOptions={{
      headerShown: false
    }}>
      {stacks.map((stack, index) => <Stack.Screen key={index} name={stack.name} component={stack.screen} />)}
    </Stack.Navigator>
  </NavigationContainer>
);
export default Routes