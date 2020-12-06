import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper/src';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
export default function App() {
  return (
    <View style={styles.container}>
      
      
      <StatusBar style="auto" />
      <View style={styles.sliderContainer}>
      <Swiper autoplay horizontal={true} height={200}>
        <View style={styles.slide}> 
          <Image source={require('./assets/img1.png')}
          resizeMode='cover'
          style={styles.sliderImager}
          />
        </View>
        <View style={styles.slide}> 
          <Image source={require('./assets/img2.png')}
          resizeMode='cover'
          style={styles.sliderImager}
          />
        </View>
      </Swiper>
      </View>


      <View style={styles.buttonContainer}>
       <TouchableOpacity style={styles.buttonTouch} onPress={()=>{}}>
        <View style={styles.buttonIcon}>
          <Ionicons name="ios-car" size={40} color="#FFFFFF"></Ionicons>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTouch} onPress={()=>{}}>
        <View style={styles.buttonIcon}>
          <Ionicons name="ios-card" size={40} color="#FFFFFF"></Ionicons>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTouch} onPress={()=>{}}>
        <View style={styles.buttonIcon}>
          <Ionicons name="ios-construct" size={40} color="#FFFFFF"></Ionicons>
        </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonTouch} onPress={()=>{}}>
        <View style={styles.buttonIcon}>
          <Ionicons name="ios-finger-print" size={40} color="#FFFFFF"></Ionicons>
        </View>
        </TouchableOpacity>
      </View>



      <View style={styles.cardsWrapper}>
        <Text>Car Stats</Text>
        <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
            <Image source={require('./assets/img2.png')}
            resizeMode="cover"
            style={styles.cardImg}
          />
          </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}> Card Head 1</Text>
              <Text style={styles.cardDetails}> Csrdddfefrewr f fr geg ertg tg t gr ghr g</Text>
            </View>
        </View>

        <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
            <Image source={require('./assets/img2.png')}
            resizeMode="cover"
            style={styles.cardImg}
          />
          </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}> Card Head 2</Text>
              <Text style={styles.cardDetails}> Csrdddfefrewr f fr geg ertg tg t gr ghr g</Text>
            </View>
        </View>



        <View style={styles.card}>
            <View style={styles.cardImgWrapper}>
            <Image source={require('./assets/img1.png')}
            resizeMode="cover"
            style={styles.cardImg}
          />
          </View>
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}> Card Head 3</Text>
              <Text style={styles.cardDetails}> Csrdddfefrewr f fr geg ertg tg t gr ghr g</Text>
            </View>
        </View>

      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop:10,
  },
  sliderContainer:{
    height:200,
    width:'90%',
    marginTop:10,
    justifyContent:'center',
    alignSelf: 'center',
    borderRadius:8,
  },
  wrapper:{},
  slide:{
    flex:1,
    justifyContent:'center',
    backgroundColor:'transparent',
    borderRadius:8,
  },
  sliderImager:{
    height:'100%',
    width:'100%',
    alignSelf:'center',
    borderRadius:8,
  },
  buttonIcon:{
    borderWidth:0,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf:'center',
    width:70,
    height:70,
    backgroundColor:'#005A9C',
    borderRadius:50,
  },
  buttonContainer :{
    flexDirection:'row',
    width:'90%',
    alignSelf:'center',
    marginTop:25,
    marginBottom:10,

  },
  buttonTouch:
  {
    flex:1,
    width:'30%',
    marginHorizontal:0,
    alignSelf:'center',
  },
  buttonTxt:
  {
    alignSelf:"center",
    marginTop:5,
    color:'#89990a'
  },
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
  },
  cardDetails: {
    fontSize: 12,
    color: '#444',
  },



});
