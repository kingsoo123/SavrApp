import React from 'react';
import {View,Text,StyleSheet, TouchableOpacity,TouchableHighlight, Image} from "react-native";
import Swiper from "react-native-web-swiper";


export default function HomeScreen(props) {
  return (
    <View style={styles.container}>
    <Swiper 
    controlsProps={{
      dotsTouchable: true,
      dotActiveStyle: { backgroundColor: '#6c63ff'},
      prevPos: 'left',
      nextPos: 'right',
      nextTitle: '',
      nextTitleStyle: { color: 'red', fontSize: 24, fontWeight: '500',  },
      PrevComponent: ({ onPress }) => (
        <TouchableOpacity onPress={onPress}>
          <Text style={{ color: 'red', fontSize: 24, fontWeight: '500' }}>
          {''}
          </Text>
        </TouchableOpacity>
      ),
    }}
    >
        <View style={[styles.slideContainer,styles.slide1]}>
       
            <Text style = {[styles.introText, styles.slidePushDownText]}>Trying to save towards a goal?</Text>
            <View>
            <Image source={require('../assets/images/slideOne.png')} style={{width: 250, height: 250}} />
          
            </View>
            <View style={{alignSelf:'center', marginTop:55, marginRight:20}} >
              <TouchableOpacity onPress={()=>props.navigation.navigate('Savings')}>
              <Text style={{fontSize: 15, color:'#828284'}} >Skip Slides</Text>
              </TouchableOpacity>
              
            </View>
            
            
        </View>
        <View style={[styles.slideContainer,styles.slide1]}>
            <Text style = {styles.introText}>You can now achieve that in 3 steps.</Text>
            <Image source={require('../assets/images/slideTwo.png')} style={{width: 250, height: 250}} />
        </View>
        <View style={[styles.slideContainer,styles.slide1]}>
            <Text style = {styles.introText}>Set a savings goal from your account.</Text>
            <View>
            <Image source={require('../assets/images/slideThree.png')} style={{width: 270, height: 200}} />
            </View>
        </View>
        <View style={[styles.slideContainer,styles.slide1]}>
            <Text style = {styles.introText}>Watch your SAVr account grow automatically.</Text>
            <View>
            <Image source={require('../assets/images/slideFour.png')} style={{width: 270, height: 230}} />
            </View>
        </View>
        <View style={[styles.slideContainer,styles.slide1]}>
            <Text style = {styles.introText}>Withdraw your money when goal is reached.</Text>
            <View>
            <Image source={require('../assets/images/slideFive.png')} style={{width: 250, height: 200}} />
            </View>
        </View>
        <View style={[styles.slideContainer,styles.slide1]}>
            <Text style = {styles.introText}>SAVr Your savings{'\n'} partner.</Text>
            <View>
            <Image source={require('../assets/images/slideSix.png')} style={{width: 270, height: 200}} />
            </View>
        <TouchableHighlight
            style={styles.button}
            onPress={()=>props.navigation.navigate('Savings')} 
            >
            <Text style={{color:'#fff', fontSize: 16}}> Start Saving </Text>
        </TouchableHighlight>
        </View>
    </Swiper>
</View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};


const styles = StyleSheet.create({
  container: {
      flex: 1
  },
  slideContainer: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center"
  },
  slide1: {
      backgroundColor: "rgba(255,255,255,0.3)",

      
  },
  slidePushDownText:{
    marginTop: 80,
  },

 
  
  introText:{
    width: 250,
    color:'#6c63ff',
    fontSize: 30,
    letterSpacing: 3,
    textAlign:'center',
    top: -50
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#0f52ba',
    padding: 10,
    marginTop:50,
    borderRadius:30,
    width: 280
  },
});
