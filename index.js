/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

// rm -rf android/app/build node_modules android/.gradle android/build .cxx 
// yarn install && cd android && ./gradlew clean

