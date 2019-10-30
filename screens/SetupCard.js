import React, { Component } from 'react';
import {Text,View, StyleSheet, TouchableHighlight, Image} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Right, Form, Item,Label,Input} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
//import StripeCheckout from 'expo-stripe-checkout';





class SetupCardScreen extends Component{
  onClose = () => {
    // maybe navigate to other screen here?
    this.props.navigation.navigate('mySettings')
  }





    render(){
     
        return(
        
            
            <Container>
         <Header style={styles.header}>
           <Left><View style={{width: 190,display:'flex', flexDirection:'row'}}><Text style={{fontSize:20, marginLeft:10, color:'#828284'}}>Hello Stephen</Text><View style={{width: 30, height: 30}}>
             
             </View></View></Left>
           <Right>
             <View>
             <Image source={require('../assets/images/profileImage.png')} style={{width: 40, height: 40}} />
             </View>
           </Right>
         </Header>
            <Content style={{backgroundColor:'#6c63ff'}}>
           <View style={{display:'flex',flexDirection:'row',justifyContent:'center', alignContent:'center'}}>
           <View style={styles.dash}>
                <Form>
                  <Item floatingLabel>
                    <Label style={{fontWeight: 'bold'}}>Name on card</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel>
                    <Label style={{fontWeight: 'bold'}}>Card number</Label>
                    <Input />
                  </Item>
               
                  <View style={{display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <Item floatingLabel style={{width:'30%'}}>
                    <Label style={{fontWeight: 'bold'}}>CVC</Label>
                    <Input />
                    </Item>

                    <Item floatingLabel style={{width:'30%'}}>
                    <Label style={{fontWeight: 'bold'}}>Expiration</Label>
                    <Input/>
                    </Item>
                
                    </View>
 
                  
          
                </Form>
              
                 
                  </View>  
           </View>
              
                       
           
              <View style={{width:'90%', alignItems: 'flex-end'}}>
             
                        <TouchableHighlight
                            style={styles.button}
                            onPress={()=>this.props.navigation.navigate('Goal')}
                            >
                            <Text style={{color:'#fff', fontSize: 16, paddingLeft:8, paddingRight:8}}>Proceed</Text>
                        </TouchableHighlight>
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

SetupCardScreen.navigationOptions = {
    header: null,
  };

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
   


    setup:{
      textAlign:'center',
      fontSize:20,
      color:'white'
    },

    dash:{
      display:'flex',
      flexDirection:'column',
      alignContent:'center',
      width:'90%',
      height: 250,
      paddingTop:5,
      paddingRight:10,
      backgroundColor:'white',
      marginTop: 30,
      borderWidth:1,
      borderRadius: 15,
      borderColor:'#D3D3D3',
      borderStyle: 'dashed',
    },

      button: {
        alignItems: 'center',
        padding: 5,
        marginTop: 30, 
        borderRadius:30,
        backgroundColor:'#0f52ba',
      },
})

export default SetupCardScreen;