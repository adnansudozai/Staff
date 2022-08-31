

// /* eslint-disable react-native/sort-styles */
// /* eslint-disable import/order */
// import React,{useState} from 'react';
// import { Image, StyleSheet, View } from 'react-native';
// import { createStackNavigator } from '@react-navigation/stack';
// import Schedule from '../screens/Schedule/Schedule';
// import Inbox from '../screens/Inbox/Inbox';
// import Profile from '../screens/Profile/Profile';
// import Patient from '../screens/Patient/Patient';
// import Experience from '../screens/Experience/Experience';
// import {Images,Colors} from '../components/index';
// import MainStack from './MainStack';
// import {
//     heightPercentageToDP as hp,
//     widthPercentageToDP as wp,
//   } from 'react-native-responsive-screen';

//   import {
//     createDrawerNavigator,
//     DrawerContentScrollView,
//     DrawerItem,
//   } from '@react-navigation/drawer';
//   import Animated from 'react-native-reanimated';
//   const Drawer = createDrawerNavigator();



// const DrawerContent = (props) => {
//     return (
//       <DrawerContentScrollView {...props} scrollEnabled={false}>
//         <DrawerItem
//           label="Inbox"
//           labelStyle={styles.drawerLblStyle}
//           onPress={() => props.navigation.navigate('Inbox')}
//         />
//         <DrawerItem
//           label="Schedule"
//           labelStyle={styles.drawerLblStyle}
//           onPress={() => props.navigation.navigate('Schedule')}
//         />
//         <DrawerItem
//           label="Patient"
//           labelStyle={styles.drawerLblStyle}
//           onPress={() => props.navigation.navigate('Patient')}
//         />
//       </DrawerContentScrollView>
//     );
//   };

//   export default () => {
//     const [progress, setProgress] = useState(new Animated.Value(0));
//     const scale = Animated.interpolate(progress, {
//       inputRange: [0, 1],
//       outputRange: [1, 0.8],
//     });
//     const borderRadius = Animated.interpolate(progress, {
//       inputRange: [0, 1],
//       outputRange: [0, 10],
//     });
    
//     const animatedStyle = {borderRadius, transform: [{scale}]};
//     return (
//         <Drawer.Navigator
//           backBehavior="none"
//           initialRouteName="Inbox"
//           drawerType="slide"
//           overlayColor="transparent"
//           drawerStyle={styles.drawerStyles}
//           contentContainerStyle={styles.container}
//           drawerContentOptions={{
//             activeBackgroundColor: 'transparent',
//             activeTintColor: 'white',
//             inactiveTintColor: 'white',
//           }}
//           sceneContainerStyle={styles.scene}
//           drawerContent={(props) => {
//             setProgress(props.progress);
//             return <DrawerContent {...props} />;
//           }}>
//           <Drawer.Screen name="MainStack">
//             {(props) => <MainStack {...props} style={animatedStyle} />}
//           </Drawer.Screen>
//         </Drawer.Navigator>
//     );
//   };
//   const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     scene: {
//       shadowColor: '#000',
//       shadowOffset: {
//         width: 0,
//         height: 12,
//       },
//       shadowOpacity: 0.58,
//       shadowRadius: 16.0,
  
//       elevation: 24,
//       backgroundColor: 'transparent',
//     },
//     stack: {
//       flex: 1,
//       shadowColor: '#FFF',
//       shadowOffset: {
//         width: 0,
//         height: 8,
//       },
//       shadowOpacity: 0.44,
//       shadowRadius: 10.32,
//       elevation: 5,
//       overflow: 'hidden',
//     },
//     drawerStyles: {flex: 1, width: '50%', backgroundColor: 'transparent'},
//     menu: {
//       width: 38,
//       height: 38,
//       margin: 20,
//     },
//     drawerLblStyle: {
//       fontWeight: '500',
//       fontSize: 20,
//     },
//   });

