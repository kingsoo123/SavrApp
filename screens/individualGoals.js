import React, {Component} from 'React';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Right} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Dash from 'react-native-dash';


class IndividualGoalScreen extends Component{

    render(){
    
        return(
            
            <Container>
            <Header style={styles.header}>
              <Left><Text style={{fontSize:20}}>My Goals</Text></Left>
              <Right>
                <View>
                <Image source={require('../assets/images/profileImage.png')} style={{width: 40, height: 40}} />
                </View>
              </Right>
            </Header>
               <Content style={{backgroundColor:'#3CB371'}}>
                 <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                 <Text style={{fontSize:30, color:'#fff', marginTop:15}}>My Wedding Savings</Text>
                 <View style={{width: 100,height: 40}}>
                 <Image source={require('../assets/images/piggyBank.png')} style={{width: 100, height:60, marginTop:10}}/>
                 </View>
                 <Text style={{fontSize:80, color:'#fff', marginTop:35}}>$30,000</Text>
                 <Text style={{fontSize:16, color:'#fff', marginTop:20}}>Savings in 20 days</Text>
                </View>
             
             

                 <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',paddingBottom:20}}>
                     <View style = {[styles.boxes, styles.third]}>
                     <Text style={styles.savings}>Set New Goal</Text>
                     <Dash style={{width:'90%'}} dashColor='#D3D3D3' dashThickness={1}/>
                     <View style={{width:'40%'}}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={()=>this.props.navigation.navigate('Goal')}
                            >
                            <Text style={{color:'#fff', fontSize: 16, fontWeight:'bold'}}>Start Now</Text>
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


IndividualGoalScreen.navigationOptions = {
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

      boxes:{
          width: '80%',
          height: 120,
          backgroundColor:'blue',
          marginTop:30,
          borderRadius: 20,
          paddingLeft: 20,
          paddingTop:20,
          shadowColor: "#000",
          shadowOffset: {width: 2,height: 2,},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 4,
       
          
      },
    
      third:{
          backgroundColor:'#3CB371',
       
      },
      savings:{
          fontSize: 20,
          color:'#fff'
      },
      button: {
        alignItems: 'center',
        padding: 5,
        marginTop: 30, 
        borderRadius:30,
        backgroundColor:'#0f52ba',
      },
  
})

export default IndividualGoalScreen;