// @ts-ignore
import React from 'react';
import { Provider } from 'react-redux';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { useReduxDevToolsExtension } from '@react-navigation/devtools';
import { store } from './store/store';
import { MainStack } from './navigation/MainStack';

const App = () => {
  const navigationRef = useNavigationContainerRef();
  useReduxDevToolsExtension(navigationRef);

  return (
    <NavigationContainer ref={navigationRef}>
      <Provider store={store}>
        <MainStack />
      </Provider>
    </NavigationContainer>
  );
};

export default App;
