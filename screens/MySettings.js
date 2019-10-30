import React, {Component} from 'React';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Right,Accordion} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Dash from 'react-native-dash';


class MySettingsScreen extends Component{

    render(){
        const dataArray = [
            { title: "My Credit Card", content: `${'hello world'}` },
            { title: "Privacy policy", content: "Lorem ipsum dolor sit amet" },
            { title: "User Agreement", content: "Lorem ipsum dolor sit amet" },
            { title: "Change Pin", content: "Lorem ipsum dolor sit amet" }
          ];
        return(
            
            <Container>
            <Header style={styles.header}>
              <Left><Text style={{fontSize:20, color:'#828284'}}>Settings</Text></Left>
              <Right>
                <View>
                <Image source={require('../assets/images/profileImage.png')} style={{width: 40, height: 40}} />
                </View>
              </Right>
            </Header>
               <Content style={{backgroundColor:'#6c63ff'}}>
                 <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                 <Text style={{fontSize:30, color:'#fff', marginTop:15}}>Steven Ibitoye</Text>
                 <Text style={{fontSize:15, color:'#fff', marginTop:10}}>steven_ibitoye@gmail.com</Text>
                </View>
                <View style={{width: '80%', justifyContent:'center', alignSelf:'center', marginTop:30}}>
                    <Accordion dataArray={dataArray}  headerStyle={{ backgroundColor: "#b7daf8" }}
                    contentStyle={{ backgroundColor: "#ddecf8" }}/>
                </View>

                 <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',paddingBottom:20}}>
                     <View style = {[styles.boxes, styles.third]}>
                     <Text style={styles.savings}>My Savings</Text>
                     <Dash style={{width:'90%'}} dashColor='#D3D3D3' dashThickness={1}/>
                     <View style={{width:'40%'}}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={()=>this.props.navigation.navigate('Goal')}
                            >
                            <Text style={{color:'#fff', fontSize: 16, fontWeight:'bold'}}>View Savings</Text>
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
                   <Button>
                   <Ionicons name="md-settings" size={22} color="white" />
                     <Text style={{color:'white'}}>Settings</Text>
                   </Button>
                 </FooterTab>
               </Footer>
             </Container>
        )
    }
}


MySettingsScreen.navigationOptions = {
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
          backgroundColor:'#6c63ff',
       
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

export default MySettingsScreen;