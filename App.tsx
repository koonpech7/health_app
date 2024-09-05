import React from 'react';
import {OerderingScreen} from './src/screens';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <OerderingScreen />
    </GestureHandlerRootView>
  );
}

export default App;
