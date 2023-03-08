import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ChatScreen } from './screens';

export const Main = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="chat">
        <Stack.Screen
          name="chat"
          component={ChatScreen}
          options={{ title: 'Real-time Chat' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
