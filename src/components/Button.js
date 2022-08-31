import React from 'react';
import {StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import ResponsiveText from './ResponsiveText';
import Colors from '../themes/colors';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

function Button({btnContainer, titleStyle, onPress, title, loading}) {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        {
          height: wp(15),
        },
        btnContainer ? btnContainer : {},
      ]}
      activeOpacity={0.9}
      onPress={() => onPress()}>
      {loading ? (
        <ActivityIndicator size="large" color="#fafafa" />
      ) : (
        <ResponsiveText style={{...styles.title, ...titleStyle}}>
          {title}
        </ResponsiveText>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    backgroundColor: Colors.BtnBackground,
    width: wp('100%') - 40,
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: wp('3.5%'),
    borderRadius: wp('2%'),
 
  },
  title: {
    alignSelf: 'center',
    color: Colors.BtnText,
    fontSize: 16,
    fontWeight: 'bold',
    margin: 0,
    padding: 0,
  },
});
export default Button;
