import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from 'screens/home/HomeScreen';
import {RootParams} from 'navigation/types';
import CountryScreen from 'screens/country/CountryScreen';

const Stack = createNativeStackNavigator<RootParams>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Countries'}}
      />
      <Stack.Screen name="Country" component={CountryScreen} options={{
        headerBackTitleVisible: false
      }}/>
    </Stack.Navigator>
  );
};

export default RootNavigator;
