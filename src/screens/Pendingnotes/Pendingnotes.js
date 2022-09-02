import { View, StyleSheet ,TouchableOpacity,FlatList,Modal,TouchableWithoutFeedback,Keyboard} from 'react-native'
import React,{useState} from 'react'
import { Container,Colors,CommentsInput,Simpleheader,ResponsiveText,Images,InputField,Icons,Dropdown,Button} from '../../components/index'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import { ScrollView } from 'react-native-virtualized-view';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CalendarPicker from 'react-native-calendar-picker';
import { color } from 'react-native-reanimated';

const Pendingnotes = (props) => {
    let data=[
        {
          id:1,
          date:'05/08/22',
          time:'15:52',
          Patient:'John Doe',
          Location:'Willowbro Clinic',
          Author:'john'
        },
        {
          id:2,
          date:'05/08/22',
          time:'15:52',
          Patient:'John Doe',
          Location:'Willowbro Clinic',
          Author:'john'
        },
        {
          id:3,
          date:'05/08/22',
          time:'15:52',
          Patient:'John Doe',
          Location:'Willowbro Clinic',
          Author:'john'
        },
        {
          id:4,
          date:'05/08/22',
          time:'15:52',
          Patient:'John Doe',
          Location:'Willowbro Clinic',
          Author:'john'
        },
        {
          id:5,
          date:'05/08/22',
          time:'15:52',
          Patient:'John Doe',
          Location:'Willowbro Clinic',
          Author:'john'
        },
        {
          id:6,
          date:'05/08/22',
          time:'15:52',
          Patient:'John Doe',
          Location:'Willowbro Clinic',
          Author:'john'
        },
        {
          id:7,
          date:'05/08/22',
          time:'15:52',
          Patient:'John Doe',
          Location:'Willowbro Clinic',
          Author:'john'
        },
      ]

      const [selectedid, setselectedid] = useState([]);

   

      const pushmessage = id => {
        if (selectedid.includes(id) === true) {
          console.log('if condition true', selectedid);
          const updatedArr = selectedid.filter(e => e !== id);
      
          setselectedid(updatedArr);
        } else {
          // newarray.push(id);
          var array1 = [...selectedid, id];
       
          setselectedid(array1);
      
        }
      };
      const renderItem=({item,index})=>{
        return(


<TouchableOpacity style={{...styles.headinsg1,backgroundColor:index%2!=0?  'white':'#EFF6FA'}} onPress={()=>props.navigation.navigate('NoteDetail')}> 
<TouchableOpacity onPress={()=>pushmessage(item.id)} style={{...styles.datevie,width:wp(8)}}>
       
{selectedid.includes(item.id) == true ? (
            <Icon name="check-box" size={18} color={Colors.primary}   style={styles.checkbox}
            />
          ) : (
            <Icon
              name="check-box-outline-blank"
              //check-box
              size={18}
              color={Colors.primary}
              style={styles.checkbox}
            />
          )}
</TouchableOpacity>

<View style={styles.datevie}>
<ResponsiveText style={styles.headingtxt1}>
      {item.date}
    </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(12)}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.time}
    </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(20)}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.Patient}
    </ResponsiveText>
</View>
<View style={{...styles.datevie,width:wp(18)}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.Author}
    </ResponsiveText>
</View>

<View style={{...styles.datevie,width:wp(30)}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.Location}
    </ResponsiveText>
</View>
           
</TouchableOpacity>
        )
      }
      const ListHeaderComponent = () => {
        return (
          <View style={styles.headinsg}> 
          <TouchableOpacity style={{...styles.datevie,width:wp(8)}}>
                   <Icon
                                   name="check-box-outline-blank"
                                   //check-box
                                   size={18}
                                   color={Colors.textColorWhite}
                                 
                                 />
          </TouchableOpacity>
         
          <View style={styles.datevie}>
          <ResponsiveText style={styles.headingtxt}>
                {'Date'}
              </ResponsiveText>
          </View>
          <View style={{...styles.datevie,width:wp(12)}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Time'}
              </ResponsiveText>
          </View>
          <View style={{...styles.datevie,width:wp(20)}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Patient'}
              </ResponsiveText>
          </View>
          <View style={{...styles.datevie,width:wp(18)}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Author'}
              </ResponsiveText>
          </View>

          <View style={{...styles.datevie,width:wp(30)}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Location'}
              </ResponsiveText>
          </View>
                     
          </View>
    
        );
      };

      const ConceltentFooter=()=>{
        return(
          <View style={styles.footerstyle}/>
    
         
        )
      }
  return (
   <Container backgroundColor={Colors.statusbarcolor}>
 <Simpleheader
        title={'Pending Notes'}
        navigation={props.navigation}/>
 <ScrollView showsVerticalScrollIndicator={false}>
 <View style={styles.mainheadingview}>
          <ResponsiveText style={styles.mainheading}>
                {'All Notes'}
              </ResponsiveText>
          </View>
  
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

  <View  style={{borderWidth:0,alignSelf:'center',justifyContent:'center',alignItems:'center'}}>
 <FlatList
               showsVerticalScrollIndicator={false}
               scrollEnabled={false}
               ListHeaderComponent={ListHeaderComponent}
               ListFooterComponent={ConceltentFooter}
               contentContainerStyle={{
                 paddingBottom: Platform.OS == 'ios' ? hp(10) : hp(15),
               }}
               data={data}
               renderItem={renderItem}
               keyExtractor={(item, index) => index.toString()}
             />
             </View>
 </ScrollView>
 </ScrollView>
   </Container>
  )
}

export default Pendingnotes

const styles = StyleSheet.create({

     /////table start

     headinsg1:{
        borderWidth:0,
        marginHorizontal:wp(3),
        flexDirection:'row',
    
      },
      headingtxt1:{
        fontSize:12,fontWeight:'700',color:Colors.balckText
      },
      mainheading:{
        fontSize:24,
        fontWeight:'700',
        color:Colors.balckText
      },
      mainheadingview:{
        borderWidth:0,marginTop:hp(3),marginHorizontal:wp(12)
      },
      footerstyle:{

        marginHorizontal:wp(3),
        borderBottomWidth:0,
        borderColor:Colors.borderColor,
        marginTop:0.2,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 1.25,
        shadowRadius: 4,
        elevation: 5
      
      },
      datevie1:{
        borderRightWidth:1,
        paddingVertical:15,
        width:wp(23),
        alignItems:'center',
        borderColor:Colors.borderColor,
        justifyContent:'center'
      },
      headinsg1:{
        borderWidth:0,
      
        flexDirection:'row',

        marginHorizontal:wp(3),
        borderColor:Colors.borderColor
      },
      actionview:{
        paddingVertical:15,
        width:wp(23),
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'space-evenly',
    
      },
      datetxt:{fontSize:16,color:Colors.balckText,fontWeight:'600'},
      headinsg:{
        borderWidth:1,
        borderBottomWidth:0,
        backgroundColor:Colors.primary,
        marginHorizontal:wp(3.1),marginTop:hp(3),
        flexDirection:'row',
        borderColor:Colors.borderColor
       
      },
      datevie:{
        borderWidth:1,
        paddingVertical:5,
        width:wp(23),
        alignItems:'center',
        borderColor:Colors.borderColor
      },
      headingtxt:{
        fontSize:16,fontWeight:'700',color:'white'
      },
      headingtxt1:{
        fontSize:14,fontWeight:'400',color:'black'
      },
      /////table end
})