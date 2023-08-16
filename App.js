import Home from './screens/Home';
import ColorPalette from './screens/ColorPalette';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import React from 'react';
import Rainbow from './screens/Rainbow';
import FrontMasters from './screens/FrontMasters';

const Stack = createStackNavigator();


const App = () => {
  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ColorPalette" component={ColorPalette} />
        <Stack.Screen name="Rainbow" component={Rainbow} />
        <Stack.Screen name="FrontMasters" component={FrontMasters} />
      </Stack.Navigator>
    </NavigationContainer>

  );

}

export default App;