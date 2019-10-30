import React, { Component } from 'react';
import {View, Text, StyleSheet, TouchableHighlight, ScrollView, Image} from 'react-native';


class AccountScreen extends Component{
    render(){
        return (
            
            <View style={styles.container}>
                
                <View>
                    <Image source={require('../assets/images/logo.png')}/>
                    
                </View>
                <View>
                <Text style = {styles.introText} >Account</Text>
                </View>
                <View style={{}}>
                <Image source={require('../assets/images/account.png')} style={{width: 240, height: 200}} />
                    
                </View>
                <View style={{width:'80%'}}>
                <TouchableHighlight
                style={styles.button}
                onPress={()=>this.props.navigation.navigate('SignUp')}
                >
                <Text style={{color:'#fff', fontSize: 16}}> Sign Up </Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.buttonOutline}
                onPress={()=>this.props.navigation.navigate('Login')}
                >
                <Text style={{color:'#170db5', fontSize: 16}}> Login </Text>
            </TouchableHighlight>
                </View>
               
            </View>
            
          
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 20,
        alignItems:'center',
    },
    introText:{
        width: 250,
        color:'#6c63ff',
        fontSize: 30,
        letterSpacing: 3,
        textAlign:'center',
        marginTop: 20
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#0f52ba',
        padding: 10,
        marginTop: 10, 
        borderRadius:30 
      },
      buttonOutline: {
        alignItems: 'center',
        padding: 10,
        marginTop: 20, 
        borderRadius:30,
        borderColor:'#0f52ba',
        borderWidth: 1
      },
});

export default AccountScreen;