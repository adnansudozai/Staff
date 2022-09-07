import { View, StyleSheet ,TouchableOpacity,ScrollView,Image} from 'react-native'
import React,{useState} from 'react'
import { Container,Colors,Simpleheader,Button,Images,InputField,ResponsiveText,Dropdown} from '../../components/index'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const Createpatient = (props) => {
  const gender = ["Male", "Female", "Other",]
  const Language = ["English", "Hindi", "Urdu","Arabic"]

  return (
    <Container backgroundColor={Colors.statusbarcolor}>
        <Simpleheader
        title={'Create Patient'}
        navigation={props.navigation}/>

        <ScrollView>

<View style={styles.imageview}>

<View style={styles.img}>

<Image
source={Images.person}
style={styles.img}
resizeMode='contain'

/>
</View>

<View style={styles.rowimage}>
<Image
source={Images.imageindicator}
style={styles.iconsimage}
resizeMode='contain'

/>
<Image
source={Images.addimage}
style={styles.iconsimage}
resizeMode='contain'

/>
</View>

</View>

<View style={styles.textheading}>
<ResponsiveText style={styles.headingtxt}>
       {'Patient Information'}
     </ResponsiveText>
</View>

        <View style={{...styles.inputview}}>
        <InputField
        placeholder={'First Name'}
        // value={''}
  fontSize={16}

        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
        </View>

        <View style={{...styles.inputview}}>
        <InputField
        placeholder={'Middle Name'}
        // value={''}
  fontSize={16}

        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
        </View>

        <View style={{...styles.inputview}}>
        <InputField
        placeholder={'Last Name'}
        // value={''}
  fontSize={16}

        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
        </View>



        <View style={styles.rowview}>


<InputField
placeholder={'DOB'}
// value={''}

onChangeText={(text)=>console.log(text)}
placeholderTextColor={Colors.txtgray}
textinputstyle={styles.textinputstyle}
width={wp(32)}
righticon={'calendar'}
/>

<Dropdown
data={gender}
fontSize={16}
borderColor={Colors.borderColor}
width={wp(41)}
defaultButtonText={'Gender'}
textcolor={Colors.grayText}
onSelect={(selectedItem, index) => {
console.log(selectedItem, index)
}}
/>

</View>


<View style={styles.rowview}>



<Dropdown
data={Language}
fontSize={16}
borderColor={Colors.borderColor}
width={wp(41)}
defaultButtonText={'Language'}
textcolor={Colors.grayText}
onSelect={(selectedItem, index) => {
console.log(selectedItem, index)
}}
/>
<InputField
placeholder={'Email'}
// value={''}

onChangeText={(text)=>console.log(text)}
placeholderTextColor={Colors.txtgray}
textinputstyle={styles.textinputstyle}
width={wp(37)}

/>


</View>
<View style={styles.rowview}>



<InputField
placeholder={'Cell'}
// value={''}

onChangeText={(text)=>console.log(text)}
placeholderTextColor={Colors.txtgray}
textinputstyle={styles.textinputstyle}
width={wp(37)}

/>

<InputField
placeholder={'SSN'}
// value={''}

onChangeText={(text)=>console.log(text)}
placeholderTextColor={Colors.txtgray}
textinputstyle={styles.textinputstyle}
width={wp(37)}

/>


</View>

<View style={styles.textheading}>
<ResponsiveText style={styles.headingtxt}>
       {'Home Address'}
     </ResponsiveText>
</View>


<View style={{...styles.inputview}}>
        <InputField
        placeholder={'Address line 1'}
        // value={''}
  fontSize={16}

        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
        </View>


        <View style={{...styles.inputview}}>
        <InputField
        placeholder={'Address line 2'}
        // value={''}
  fontSize={16}

        onChangeText={(text)=>console.log(text)}
        placeholderTextColor={Colors.txtgray}
        textinputstyle={styles.textinputstyle}
        
        />
        </View>

    
        <View style={styles.btnview}>
            <Button
            title={'Create Booking'}
            onPress={()=>props.navigation.goBack()}/>
        </View>
        </ScrollView>
   </Container>
  )
}

export default Createpatient

const styles = StyleSheet.create({
    inputview:{borderWidth:0,marginTop:hp(1.5),marginHorizontal:wp(5),
        marginHorizontal:wp(5),
        justifyContent:'center',
        alignContent:'center'  },
        rowview:{
            borderWidth:0,marginTop:hp(2),flexDirection:'row',justifyContent:'space-between',marginHorizontal:wp(5),
            alignItems:'center',
        },
        dropdown:{
            borderWidth:0,marginTop:hp(1.5),marginHorizontal:wp(5),borderRadius:10  },
            btnview:{marginTop:hp(10),borderWidth:0,alignItems:'center',marginHorizontal:wp(5),justifyContent:'center'},
            imageview:{
                borderWidth:0,
                marginHorizontal:wp(5),
                marginTop:hp(4),
                alignItems:'center',
                justifyContent:"center"
            },
            img:{
                borderWidth:2,
                width:wp(40),
                height:wp(40),
                borderRadius:wp(20),
                borderColor:Colors.primary,
                alignItems:"center",
                justifyContent:"center",
                alignSelf:'center'
            },
            rowimage:{
                borderWidth:0,flexDirection:'row',
                alignItems:'center',justifyContent:'space-around',
                width:wp(20),
                position:"absolute",
                bottom:hp(-1.5),
               
            },
            iconsimage:{
                width:wp(8),
                height:wp(8)
            },
            textheading:{
                borderWidth:0,
                marginTop:hp(3),
                marginHorizontal:wp(5)
            },
            headingtxt:{
                fontSize:18,
                fontWeight:'600',
                color:Colors.balckText
            }
})