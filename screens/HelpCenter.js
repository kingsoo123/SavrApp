import React, {Component} from 'React';
import {View, Text, StyleSheet, TouchableHighlight, Image} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Right} from 'native-base';
import { Ionicons } from '@expo/vector-icons';



class HelpCenterScreen extends Component{

    render(){
    
        return(
            
            <Container>
            <Header style={styles.header}>
              <Left><Text style={{fontSize:20}}>Help Center</Text></Left>
              <Right>
                <View>
                <Image source={require('../assets/images/profileImage.png')} style={{width: 40, height: 40}} />
                </View>
              </Right>
            </Header>
               <Content style={{backgroundColor:'#D3D3D3'}}>
                 <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignSelf:'center', borderRadius: 15, marginTop: 30, borderWidth:1, width:'80%', height: 35}}>
               
                </View>
                <View style={styles.boxe}>
                 
                </View>

                <View style={{alignSelf:'center' }}>
                    <Text>Can't find what you're looking for?</Text>
                    <Text> Email:steven_ibitoye@gmail.com</Text>
                </View>

           
                 
               </Content>
   
   
   
   
   
               <Footer>
                 <FooterTab>
                   <Button>
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


HelpCenterScreen.navigationOptions = {
    header: null
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        alignItems: 'center',
        paddingTop: 20,
    },
  
    header:{
      paddingTop:20, 
      height: 90,
       backgroundColor: 'transparent'
    },

      boxe:{
          width: '80%',
          height: 250,
          marginTop:40,
          borderRadius: 20,
          paddingBottom:10,
          alignSelf:'center',
          shadowColor: "#000",
          shadowOffset: {width: 2,height: 2,},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 4,
          backgroundColor:'#D3D3D3',
          marginBottom:5
          
      },

  
})

export default HelpCenterScreen;