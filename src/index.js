import 'react-native-gesture-handler';
import './config/ReactotronConfig';
import React from 'react';

import {Provider} from 'react-redux';

import MainStackNavigator from './routes';
import store from './store';

export default function App() {
  return (
    <Provider store={store}>
      <MainStackNavigator />
    </Provider>
  );
}
