import React, { Component } from 'react';
import {View, Text, StyleSheet, Image,TouchableHighlight, ScrollView} from 'react-native';
import {Form, Input, Item} from 'native-base';
import Axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';
import  {KeyboardAwareScrollView } from 'react-native-keyboard-aware-scrollview';

class LoginScreen extends Component{
    constructor(props){
        super(props)
        this.state= {
            phoneNumber:'',
            pinNumber:'',
            showAlert: false,
            isCorrect: true
        }
    }

    showAlert = () => {
        this.setState({
          showAlert: true
        });
      };
    
      hideAlert = () => {
        this.setState({
          showAlert: false
        });
      };




      handleChangeMobile=(text)=>{
        if(text === '' || isNaN(text)){
            this.setState({isCorrect: !this.state.isCorrect, phoneNumber:''})
           }else{
            this.setState({phoneNumber: text, isCorrect: true})
            
           }
        
    }

    handleChangePin=(text)=>{
        if(text === '' || isNaN(text)){
            this.setState({isCorrect: !this.state.isCorrect, pinNumber:''})
           }else{
            this.setState({pinNumber: text, isCorrect: true})
            
           }
        
    }



    handleCreate = async()=>{
        try {
            const {phoneNumber, pinNumber} = this.state;
            if(phoneNumber === '' || isNaN(phoneNumber) || phoneNumber === '' || isNaN(phoneNumber)){
                this.showAlert()
            }else{
               /*  const saver = await Axios.post('https://savrapi.herokuapp.com/saver', {phoneNumber, pinNumber});
                const data = saver.data; */
                /* const nameVal = data.data.name;
                const emailVal = data.data.email;
                const phoneNumberVal = data.data.phoneNumber; */
              /*   alert(`Great to have you on onboard ${data.data.name}`);
                this.props.navigation.navigate('Registration');
                this.state.phoneNumber ='';
                this.state.pinNumber =''; */
            
                //Axios.get('http://192.168.4.105:2020/saver');
                null
            }
           
            
            
        } catch (error) {
            console.warn(error)
        }
        
          
        }
    render(){
        return (
            <KeyboardAwareScrollView
            scrollEnabled={true}
            enableAutomaticScroll={true}
            extraScrollHeight={100} enableOnAndroid={true} 
            keyboardShouldPersistTaps='handled'
            contentContainerStyle={{flex: 1}}
           
            >
            <ScrollView>
            <View style={styles.container}>
                <View>
                    <Image source={require('../assets/images/logo.png')}/>
                    
                </View>
                <View>
                <Text style = {styles.introText} >Login</Text>
                </View>
                <View style={{width:'80%', marginTop: 20}}>
                    <Form>
                        <Item regular>
                        <Input placeholder='Phone Number' onChangeText={(text)=>{this.handleChangeMobile(text)}} value={this.state.phoneNumber} style={[styles.txtInput, !this.state.isCorrect ? styles.failed: null]} maxLength={10}/>
                        </Item>
                        <Text>{""}</Text>
                        <Item regular>
                        <Input placeholder='Your PIN' onChangeText={(text)=>{this.handleChangePin(text)}} value={this.state.pinNumber} style={[styles.txtInput, !this.state.isCorrect ? styles.failed: null]} maxLength={4}/>
                        </Item>                    
                    </Form>
                </View>
            
                <View style={{width:'80%'}}>
                <TouchableHighlight
                style={styles.button}
                onPress={this.handleCreate}
                >
                <Text style={{color:'#170db5', fontSize: 16}}>Login</Text>
            </TouchableHighlight>
                </View>
                <View>
                    <Text style={{fontWeight:'bold', marginTop: 30, fontSize: 20, color:'#170db5'}}>Forgot Pin?</Text>
                </View>
        
            </View>
            <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          message="Please enter your login details!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={false}
          cancelText="Okay"
          confirmText="Yes, delete it"
          confirmButtonColor="#DD6B55"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
            </ScrollView>
            </KeyboardAwareScrollView>
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
        fontSize: 30,
        letterSpacing: 3,
        textAlign:'center',
        marginTop: 20
      },
      button: {
        alignItems: 'center',
        padding: 10,
        marginTop: 25, 
        borderRadius:30,
        borderColor:'#0f52ba',
        borderWidth: 1 
      },

      txtInput:{
        borderWidth: 1,
        borderColor: '#0f52ba'
    },
    failed:{
      borderWidth: 1,
      borderColor: 'red'
    }
  
});

export default LoginScreen;