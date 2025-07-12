import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import {
  createStaticNavigation,
  useIsFocused,
  useNavigation,
} from '@react-navigation/native';
import { Button } from '@react-navigation/elements';
import Icon from './src/components/icon/Icon';
import MMKV from './src/utils/storage';

function HomeScreen() {
  const navigation = useNavigation();

  const userInfo = {
    name: 'Imdadul Haque',
    email: 'imdadulhaque1440@gmail.com',
    phone: '01770019346',
    address: 'Dhaka, Bangladesh',
    age: 28,
    occupation: 'Mobile App Developer',
    hobbies: ['Coding', 'Reading', 'Traveling'],
    skills: ['JavaScript', 'React Native', 'Node.js'],
  };

  const saveToMMKV = async () => {
    try {
      await MMKV.setMap('userInfo', userInfo);
      await navigation.navigate('Notifications');
    } catch (error: any) {
      console.error('Error saving to MMKV:', error?.message);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button onPress={saveToMMKV}>Go to notifications</Button>
      <Icon />
      <Text
        style={{ fontSize: 25, color: 'black', fontFamily: 'WorkSans-Regular' }}
      >
        Featured App
      </Text>
    </View>
  );
}

function NotificationsScreen() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [rUserInfo, setRUserInfo] = React.useState<any>(null);
  const retrieveUserFunc = async () => {
    try {
      const userInfo = await MMKV.getMap('userInfo');
      setRUserInfo(userInfo);
    } catch (error: any) {
      console.error('Error retrieving from MMKV:', error?.message);
    }
  };

  React.useEffect(() => {
    if (isFocused) {
      retrieveUserFunc();
    }
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>{rUserInfo?.name}</Text>
      <Text style={styles.textStyle}>{rUserInfo?.email}</Text>
      <Text style={styles.textStyle}>{rUserInfo?.phone}</Text>
      <Text style={styles.textStyle}>{rUserInfo?.address}</Text>
      <Text style={styles.textStyle}>{rUserInfo?.occupation}</Text>

      <Button
        style={{ marginTop: 20 }}
        onPressIn={() => {
          navigation.goBack();
        }}
      >
        Go Back
      </Button>
    </View>
  );
}

const Drawer = createDrawerNavigator({
  screens: {
    Home: HomeScreen,
    Notifications: NotificationsScreen,
  },
});

const Navigation = createStaticNavigation(Drawer);

export default function App() {
  return <Navigation />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textStyle: {
    fontSize: 18,
    color: '#111111',
  },
});
