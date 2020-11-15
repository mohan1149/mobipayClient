/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Routes from './src/routes';
import firebase from '@react-native-firebase/app';
export default class App extends React.Component {
  render() {
    return (
      <Routes />
    );
  }
}
