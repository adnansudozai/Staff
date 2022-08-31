import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Image, StyleSheet, View } from 'react-native';
import SignIn from '../screens/SignIn/SignIn';
import Register from '../screens/Register/Register';
import GetStarted from '../screens/GetStarted/GetStarted';
import BottomTab from './Tabs';
import BookAppointment from '../screens/BookAppointment/BookAppointment';
import EditAppointment from '../screens/EditAppointment/EditAppointment';
import NoteDetail from '../screens/NoteDetail/NoteDetail';
import Pendingnotes from '../screens/Pendingnotes/Pendingnotes';
import PreviousNotes from '../screens/PreviousNotes/PreviousNotes';
import DraftNotes from '../screens/DraftNotes/DraftNotes';
import Createmessage from '../screens/Createmessage/Createmessage';
import Message from '../screens/Message/Message';
import Draftmessage from '../screens/Draftmessage/Draftmessage';
import Orders from '../screens/Orders/Orders';
import Detailnotes from '../screens/Detailnotes/Detailnotes';

const Stack = createNativeStackNavigator();

const MainStack = ({navigation, style}) => {
  return (
    // <Animated.View style={[styles.stack, style]}>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={'SignIn'}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name="NoteDetail" component={NoteDetail} />
      <Stack.Screen name="BookAppointment" component={BookAppointment} />
      <Stack.Screen name="EditAppointment" component={EditAppointment} />
      <Stack.Screen name="Pendingnotes" component={Pendingnotes} />
      <Stack.Screen name="PreviousNotes" component={PreviousNotes} />
      <Stack.Screen name="DraftNotes" component={DraftNotes} />
      <Stack.Screen name="Createmessage" component={Createmessage} />
      <Stack.Screen name="Message" component={Message} />
      <Stack.Screen name="Draftmessage" component={Draftmessage} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Detailnotes" component={Detailnotes} />
    </Stack.Navigator>
    // </Animated.View>

  );
};

export default MainStack;
const styles = StyleSheet.create({
  
  stack: {
    flex: 1,
    shadowColor: '#FFF',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 5,
    overflow: 'hidden',
  },
 
});
