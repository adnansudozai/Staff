import { View, StyleSheet ,ScrollView,FlatList,Modal,TouchableOpacity} from 'react-native'
import React,{useState} from 'react'
import { Container,Colors,Simpleheader,Button,Images,Dropdown,Icons,ResponsiveText} from '../../components/index'
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';
import CalendarPicker from 'react-native-calendar-picker';

const Weekdays = (props) => {
    const [alertModal, setalertModal] = useState(false)
    const countries = ["Egypt", "Canada", "Australia", "Ireland"]
    const Status = ["Conferm", "Pending"]
    const apiveri = ["Yes", "No"]

    let data=[
        {
          time:'15:52',
        

        },
        {
            time:'15:52',
          
  
          },
          {
            time:'15:02',
          
  
          },
          {
            time:'09:52',
          
  
          },
          {
            time:'10:52',
          
  
          },
          {
            time:'15:52',
          
  
          },
          {
            time:'15:52',
          
  
          },
          {
            time:'15:52',
          
  
          },
          {
            time:'15:52',
          
  
          },

       
       
      ]
      const renderItem=({item,index})=>{
        return(


<TouchableOpacity onPress={()=>props.navigation.navigate('DraftNotedetail')} style={{...styles.headinsg1,backgroundColor:'#C2D6F1'}}> 

<View style={{...styles.datevie,backgroundColor:'white'}}>
<ResponsiveText style={styles.headingtxt1}>
      {item.time}
    </ResponsiveText>
</View>
<View style={{...styles.datevie,}}>
          <ResponsiveText style={styles.headingtxt1}>
                {''}
              </ResponsiveText>
          </View>
     
<View style={{...styles.datevie,}}>
<ResponsiveText style={styles.headingtxt1}>
      {''}
    </ResponsiveText>
</View>
<View style={{...styles.datevie,}}>
<ResponsiveText style={styles.headingtxt1}>
      {''}
    </ResponsiveText>
</View>

<View style={{...styles.datevie,}}>
<ResponsiveText style={styles.headingtxt1}>
      {''}
    </ResponsiveText>
</View>
           
</TouchableOpacity>
        )
      }

      const ListHeaderComponent = () => {
        return (
          <View style={styles.headinsg}> 
        
         
          <View style={{...styles.datevie,borderWidth:0}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Time'}
              </ResponsiveText>
          </View>

          <View style={{...styles.datevie,borderWidth:0,width:wp(60),alignItems:'center'}}>
          <ResponsiveText style={styles.headingtxt}>
                {'Sunday 7/3'}
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
    title={'Weak Days View'}
    navigation={props.navigation}/>
<View>
    <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
<View style={{marginHorizontal:wp(5),marginTop:hp(6),flexDirection:'row',borderWidth:0}}>


<TouchableOpacity onPress={() => setalertModal(true)}
              style={{ ...styles.download,alignItems: 'center' }}>
              <Icons icon={Images.filter}
                style={{ width: wp(5), height: wp(5), }} />
             


            </TouchableOpacity>
       


            <TouchableOpacity
              style={{ ...styles.download,alignItems: 'center' , width:wp(20),marginLeft:8}}>
                <ResponsiveText style={styles.filter}>
                {'Today'}
              </ResponsiveText>

            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...styles.download,alignItems: 'center' , width:wp(25),marginLeft:8}}>
                <ResponsiveText style={styles.filter}>
                {'1 Week'}
              </ResponsiveText>

            </TouchableOpacity>

            <TouchableOpacity
              style={{ ...styles.download,alignItems: 'center' , width:wp(25),marginLeft:8}}>
                <ResponsiveText style={styles.filter}>
                {'2 Week'}
              </ResponsiveText>

            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.download,alignItems: 'center' , width:wp(25),marginLeft:8}}>
                <ResponsiveText style={styles.filter}>
                {'3 Week'}
              </ResponsiveText>

            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.download,alignItems: 'center' , width:wp(25),marginLeft:8}}>
                <ResponsiveText style={styles.filter}>
                {'4 Week'}
              </ResponsiveText>

            </TouchableOpacity>

</View>

        </ScrollView>
        </View>
        <View style={styles.graybackground}>
            <View style={styles.rowview}>
            <TouchableOpacity
              style={{}}>
              <Icon
                      name="left"
                      size={16}
                      color={'black'}
                    />
            
                    
            </TouchableOpacity>

            <ResponsiveText style={styles.filter}>
                {'Sun july 3'}
              </ResponsiveText>

            <TouchableOpacity
              style={{}}>
              <Icon
                      name="right"
                      size={16}
                      color={'black'}

                    />
            
                    
            </TouchableOpacity>

           
            </View>
            

</View>

<View style={{borderWidth:0,alignItems:"center",justifyContent:'center',marginHorizontal:wp(3)}}>
 
<ScrollView horizontal showsHorizontalScrollIndicator={false}>
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
  </ScrollView>
  </View>

  {/* modallll */}

  <Modal
        animationType="fade"
        transparent={true}
        visible={alertModal}
      >
        <View style={styles.modalview}>
          <View style={styles.modalhalf}>
            <ScrollView showsVerticalScrollIndicator={false}>



              <View style={styles.filtecross}>
                <ResponsiveText style={styles.inboxtxt}>
                  {'Filters'}
                </ResponsiveText>
                <TouchableOpacity onPress={() => setalertModal(false)}>
                  <Icons icon={Images.cross}
                    style={{ width: wp(5), height: wp(5) }} />

                </TouchableOpacity>
              </View>
              <View style={styles.calander}>
                <CalendarPicker
                  startFromMonday={false}
                  todayBackgroundColor={Colors.primary}
                  selectedDayColor={Colors.primary}
                  selectedDayTextColor="#FFFFFF"
                  onDateChange={(date) => console.log(date)}
                  width={wp(60)}
                  monthTitleStyle={{ color: Colors.primary }}
                  yearTitleStyle={{ color: Colors.primary }}
                  nextComponent={
                    <Icon
                      name="right"
                      size={16}
                    />
                  }
                  previousComponent={

                    <Icon
                      name="left"
                      size={16}
                    />

                  }

                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  defaultButtonText={'States'}
                  textcolor={'gray'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  defaultButtonText={'Locations'}
                  textcolor={'gray'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  textcolor={'gray'}
                  defaultButtonText={'Specialty'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  textcolor={'gray'}
                  defaultButtonText={'Providers'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  defaultButtonText={'Type'}
                  textcolor={'gray'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  textcolor={'gray'}
                  defaultButtonText={'Age Group'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                />
              </View>
              <View style={styles.dropdown}>
                <Dropdown
                  data={countries}
                  borderColor={Colors.borderColor}
                  width={wp(70)}
                  textcolor={'gray'}
                  defaultButtonText={'Time'}
                  onSelect={(selectedItem, index) => {
                    console.log(selectedItem, index)
                  }}
                />
              </View>
              <View style={styles.smallbtn}>
                <TouchableOpacity style={styles.btn}>
                  <ResponsiveText style={styles.btntext}>
                    {'Reset'}
                  </ResponsiveText>
                </TouchableOpacity>
                <TouchableOpacity style={{ ...styles.btn, backgroundColor: Colors.primary, borderWidth: 0 }}>
                  <ResponsiveText style={{ ...styles.btntext, color: 'white' }}>
                    {'Filter'}
                  </ResponsiveText>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                  <ResponsiveText style={styles.btntext}>
                    {'Next'}
                  </ResponsiveText>
                </TouchableOpacity>
              </View>



            </ScrollView>
          </View>
        </View>
      </Modal>
        </Container>
  )
}

export default Weekdays

const styles = StyleSheet.create({
    weekrow:{
        borderWidth:1,width:wp(20),height:wp(10),marginTop:hp(2)
    },
    download: {
        borderWidth: 1,
        padding: 10,
       width:wp(12),
       height:wp(12),
       marginTop:hp(2),
        borderRadius: 8,
        borderColor: Colors.borderColor,
        alignItems:'center',
        justifyContent:'center'
    
      },
      filter: { fontSize: 16, color: Colors.balckText, marginLeft: 5 },
      graybackground:{
        backgroundColor:'#ECEFF2',
        marginTop:10,
        paddingVertical:10,
        borderWidth:0,
        marginTop:hp(4)
      },
      rowview:{
        flexDirection:'row',
        alignItems:"center",
        justifyContent:'space-between',
        marginHorizontal:wp(8)
      },
      headinsg1:{
        borderWidth:0,
      
        flexDirection:'row',
       
        marginHorizontal:wp(3),
        borderColor:Colors.borderColor
      },
      headingtxt1:{
        fontSize:16,fontWeight:'700',color:Colors.balckText
      },
      footerstyle:{
   
        marginHorizontal:wp(3),
        borderBottomWidth:0,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
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
      calander: {
        borderWidth: 1, marginTop: 15
        , marginHorizontal: wp(3),
        alignItems: 'center',
        borderColor: Colors.primary,
        borderRadius: 10,
        padding: 10
    
      },
      btn: {
        borderWidth: 1, borderColor: Colors.borderColor, alignItems: 'center', justifyContent: 'center', padding: 8, borderRadius: 5, paddingHorizontal: 18
      },
      smallbtn: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: wp(3), borderWidth: 0, marginTop: hp(2)
      },
      dropdown: {
        borderWidth: 0, marginTop: hp(1.5), marginHorizontal: wp(3), borderRadius: 10
      },
  
      btntext: {
        color: Colors.balckText, fontSize: 16
      },
      modalhalf: {
        flex: 1,
        backgroundColor: 'white',
        width: wp(75)
      },
      modalview: {
        flex: 1,
        backgroundColor: 'rgba(17, 21, 58, 0.8)'
      },
      download: {
        borderWidth: 1,
        padding: 10,
        marginLeft: 10,
    
        borderRadius: 8,
        borderColor: Colors.borderColor
    
      },
      datevie1:{
        borderRightWidth:0,
        paddingVertical:15,
        width:wp(16),
        alignItems:'center',
        borderColor:Colors.borderColor,
        justifyContent:'center'
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
       borderColor:Colors.borderColor,
        backgroundColor:Colors.primary,
        marginHorizontal:wp(2.8),marginTop:hp(3),
         borderWidth:1,
        flexDirection:'row',
        alignItems:'center',
      
      },
      datevie:{
        borderWidth:0.5,
        paddingVertical:3,
        width:wp(16),
        alignItems:'center',
        borderColor:Colors.borderColor
      },
      headingtxt:{
        fontSize:16,fontWeight:'700',color:'white'
      },
      headingtxt1:{
        fontSize:14,fontWeight:'400',color:'black'
      },
      mainheading:{
       fontSize:24,
       fontWeight:'700',
       color:Colors.balckText
     },
     filtecross: {
        borderWidth: 0, alignItems: 'center', flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(3), marginHorizontal: wp(3),
        borderBottomWidth: 1, borderColor: Colors.borderColor, paddingBottom: 10
      },
     mainheadingview:{
       borderWidth:0,marginTop:hp(3),marginHorizontal:wp(3)
     },
})