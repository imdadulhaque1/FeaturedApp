module.exports = {
  presets: ['module:@react-native/babel-preset'],

  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@features': './src/features',
          '@nativeModules': './src/nativeModules',
          '@navigations': './src/navigations',
          '@shared': './src/shared',
          '@stateManagement': './src/stateManagement',
          '@src': './src',
        },
      },
    ],
  ],
};
