import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen, TambahKontak, DetailKontak, EditKontak} from '../pages';

const Stack = createNativeStackNavigator();
const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Tambah Kontak" component={TambahKontak} />
      <Stack.Screen name="Detail Kontak" component={DetailKontak} />
      <Stack.Screen name="Edit Kontak" component={EditKontak} />
    </Stack.Navigator>
  );
};
export default Router;
