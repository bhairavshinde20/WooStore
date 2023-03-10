import { View, Text } from 'react-native'
import React from 'react'
import AppNavigator from './src/AppNavigator'
import { Provider } from 'react-redux'
// import Store from './src/redux/Store';
import Store from './src/redux/Store';
import { AuthProvider } from './src/components/Account/context/AuthContext';

export default function App() {
  return (
    <AuthProvider>
      <Provider store={Store}>
        <AppNavigator />
      </Provider>
    </AuthProvider>

  )
}