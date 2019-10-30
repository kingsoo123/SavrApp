import React, { Component } from 'react';
import {View, Text, StyleSheet, Image,TouchableHighlight, ScrollView} from 'react-native';



class NoticeScreen extends Component{
     render(){
        return (
          
            <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image source={require('../assets/images/logo.png')}/>
                    
                </View>
                <View>
                <Text style = {styles.introText}>Disbursement notice</Text>
                </View>
                <View style={{width:'80%', marginTop: 20, display: 'flex', flexDirection:"column",borderRadius:15, shadowColor: "#000",shadowOffset: {width: 0,height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84, elevation: 2, justifyContent:'center',alignItems:'center', padding:20}}>
                    <View style={{marginTop: 30}}>
                        <Text style={{textAlign:'center', fontSize: 17, lineHeight: 35, color:'#828284'}}>
                        All disbursments are subjects to the due date, and our transparent policy allows only withdrawals to be made to your
                        credit card default to your account and a 2-4 days window is to be expected until cash is received into your credit card.
                        Kindly accept to proceed.
                        </Text>
                    </View>
                    <View style={{width:'50%'}}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={()=>this.props.navigation.navigate('Setup')}
                            >
                            <Text style={{color:'#170db5', fontSize: 16, fontWeight:'bold'}}>I accept</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            </ScrollView>

        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 20,
        paddingBottom:20,
        alignItems:'center',
    },
    introText:{
        width: 250,
        color:'#6c63ff',
        fontSize: 20,
        letterSpacing: 3,
        textAlign:'center',
        marginTop: 20
      },
      button: {
        alignItems: 'center',
        padding: 5,
        marginTop: 25, 
        borderRadius:30,
        borderColor:'#170db5',
        borderWidth: 1 
      },
  
});

export default NoticeScreen;