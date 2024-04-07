const Stack = createStackNavigator();

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';
import HomeScreen from './Screens/HomeScreen';
import ScanScreen from './Screens/ScanScreen';
import ResultsScreen from './Screens/ResultsScreen';
import ChatScreen from './Screens/ChatScreen';

const App = () => {
  const [hideSplashScreen, setHideSplashScreen] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setHideSplashScreen(true);
    }, 4000);
  }, []);


  return (
    <NavigationContainer>
      {hideSplashScreen ? (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ScanScreen"
          component={ScanScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResultsScreen"
          component={ResultsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    ) : (
          <SplashScreen />
        )}
    </NavigationContainer>
  );
};

export default App;
