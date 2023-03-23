import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, Box } from "native-base";
import AuthStack from './src/navigation/AuthStack';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthStack/>
      </NavigationContainer>
    </NativeBaseProvider>

  )
}

export default App;