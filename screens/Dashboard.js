import React, {Component} from 'react';
import {View, Text, TouchableHighlight, StyleSheet, Dimensions, Image} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Right} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import ProgressBarAnimated from 'react-native-progress-bar-animated';
import Dash from 'react-native-dash';
class DashboardScreen extends Component{
    render(){
        const barWidth = Dimensions.get('screen').width - 80;

        const progressCustomStyles = {
            backgroundColor: '#6593f5', 
            borderColor: '#fff',
          };
        return(
            <Container>
            <Header style={styles.header}>
              <Left><View style={{width: 150}}><Text style={{fontSize:20, marginLeft:10, color:'#828284'}}>Hey Stephen!</Text></View></Left>
              <Right>
                <View>
                <Image source={require('../assets/images/profileImage.png')} style={{width: 40, height: 40}} />
                </View>
              </Right>
            </Header>
               <Content style={{backgroundColor:'#D3D3D3'}}>
                 <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                     <View style = {styles.boxes}>
                     <Text style={styles.savings}>Your Savings progress</Text>
                     <View style={{marginTop:20}}>
                     <ProgressBarAnimated
                     {...progressCustomStyles}
                    width={barWidth}
                    height={5}
                    value={90}
                    backgroundColorOnComplete="#6c63ff"
                    {...progressCustomStyles}
                    onComplete={() => {
                        Alert.alert('Hey!', 'onComplete event fired!');
                      }}
                />
                <View style={{width:'90%', alignItems: 'flex-end'}}>
                <Text style={styles.savings}>20 days left</Text>
                </View>
                </View>
                     </View>
                 </View>

                 <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                     <View style = {[styles.boxes, styles.secondBox]}>
                     <Text style={styles.savings}>Set New Goal</Text>
                     <Dash style={{width:'90%'}} dashColor='#D3D3D3' dashThickness={1}/>
                     <View style={{width:'90%', alignItems: 'flex-end'}}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={()=>this.props.navigation.navigate('Setup')}
                            >
                            <Text style={{color:'#fff', fontSize: 16, paddingLeft:8, paddingRight:8}} onPress={()=> this.props.navigation.navigate('Dashboard')}>Start Now</Text>
                        </TouchableHighlight>
                  </View>
                     </View>
                 </View>

                 <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingBottom:20}}>
                     <View style = {[styles.boxes, styles.third]}>
                     <Text style={styles.savings}>My Savings</Text>
                     <Dash style={{width:'90%'}} dashColor='#D3D3D3' dashThickness={1}/>
                     <View style={{width:'90%', alignItems: 'flex-end'}}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={()=>this.props.navigation.navigate('Goal')}
                            >
                            <Text style={{color:'#fff', fontSize: 16,paddingLeft:8, paddingRight:8}}>View Savings</Text>
                        </TouchableHighlight>
                  </View>
                     </View>
                 </View>
                
                 
               </Content>
   
   
   
   
   
               <Footer>
                 <FooterTab>
                   <Button onPress={()=>this.props.navigation.navigate('helpCenter')}>
         <Ionicons name="md-help" size={22} color="white" />
                 
                     <Text style={{color:'white'}}>Help Center</Text>
                   </Button>
                   <Button>
                     <Text>{""}</Text>
                   </Button>
                   <Button active>
                   <Text>{""}</Text>
                   </Button>
                   <Button onPress={()=>this.props.navigation.navigate('mySettings')}>
                   <Ionicons name="md-settings" size={22} color="white" />
                     <Text style={{color:'white'}}>Settings</Text>
                   </Button>
                 </FooterTab>
               </Footer>
             </Container>
        )
    }
}

DashboardScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center',
        paddingTop: 20,
    },
    profile:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        width:'90%',
        paddingTop: 30
    },
    header:{
      paddingTop:20, 
      height: 90,
       backgroundColor: 'transparent'
    },

      button: {
        alignItems: 'center',
        padding: 5,
        marginTop: 30, 
        borderRadius:30,
        backgroundColor:'#170db5',
        borderWidth: 1 
      },
      boxes:{
          width: '90%',
          height: 120,
          backgroundColor:'#0f52ba',
          marginTop:20,
          borderRadius: 20,
          paddingLeft: 20,
          paddingTop:20, 
          shadowColor: "#0f52ba",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.29,
          shadowRadius: 4.65,

          elevation: 7,
          
      },
      secondBox:{
          backgroundColor:'#6c63ff',
          
      },
      third:{
          backgroundColor:'#3CB371'
      },
      savings:{
          fontSize: 20,
          color:'#fff',

      },
      button: {
        alignItems: 'center',
        padding: 5,
        marginTop: 20, 
        borderRadius:30,
        backgroundColor:'#0f52ba',
      },
})


export default DashboardScreen;