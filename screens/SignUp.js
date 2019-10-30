import React, { Component } from 'react';
import {View, Text, StyleSheet, Image,TouchableHighlight, KeyboardAvoidingView} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {Form, Input, Item} from 'native-base';
import Axios from 'axios';
import AwesomeAlert from 'react-native-awesome-alerts';

class SignUpScreen extends Component{

    constructor(props){
        super(props)
        this.state= {
            name:'',
            email:'',
            phoneNumber:'',
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
   /*  validateEmail= (emailVal) =>{
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(emailVal).toLowerCase());
    } */

handleChangeName=(text)=>{
    if(text === '' || !isNaN(text)){
     this.setState({isCorrect: !this.state.isCorrect, name:''})
     
    }else{
        this.setState({name: text, isCorrect: true})
        
    }
}

handleChangeEmail = (text)=>{
    var re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
     if(!re.test(text)){
        this.setState({isCorrect: !this.state.isCorrect, email: text})
        
        
    }else{
        this.setState({isCorrect: true, email: text})
        
    }
    
}

handleChangeMobile=(text)=>{
    if(text === '' || isNaN(text)){
        this.setState({isCorrect: !this.state.isCorrect, phoneNumber:''})
       }else{
        this.setState({phoneNumber: text, isCorrect: true})
        
       }
    
}

handleCreate = async()=>{
try {
    const {name, email, phoneNumber} = this.state;
    if(name === '' || !isNaN(name) || email === '' || phoneNumber === '' || isNaN(phoneNumber)){
        this.showAlert()
    }else{
        const saver = await Axios.post('https://savrapi.herokuapp.com/saver', {name, email,phoneNumber});
        const data = saver.data;
        /* const nameVal = data.data.name;
        const emailVal = data.data.email;
        const phoneNumberVal = data.data.phoneNumber; */
        alert(`Great to have you on onboard ${data.data.name}`);
        this.props.navigation.navigate('Registration');
        this.state.phoneNumber ='';
        this.state.email ='';
        this.state.name =''
        //Axios.get('http://192.168.4.105:2020/saver');
    }
   
    
    
} catch (error) {
    console.warn(error)
}

  
}


    render(){
        return (
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
            <View style={styles.container}>
                <View>
                    <Image source={require('../assets/images/logo.png')}/>
                    
                </View>
                <View>
                <Text style = {styles.introText} >Sign Up</Text>
                </View>
                <View style={{width:'80%', marginTop: 20}}>
                    <Form>
                        <Item regular>
                        <Input placeholder='Name' placeholderTextColor="#D3D3D3" onChangeText={(text)=>{this.handleChangeName(text)}} value={this.state.name} style={[styles.txtInput, !this.state.isCorrect ? styles.failed: null]} maxLength={30}/>
                        </Item>
                        <Text>{""}</Text>
                        <Item regular>
                        <Input placeholder='example@example.com' placeholderTextColor="#D3D3D3" onChangeText={(text)=>{this.handleChangeEmail(text)}} value={this.state.email} style={[styles.txtInput, !this.state.isCorrect ? styles.failed: null]} maxLength={30}/>
                        </Item>
                        <Text>{""}</Text>
                        <Item regular>
                        <Input placeholder='Mobile' placeholderTextColor="#D3D3D3" onChangeText={(text)=>{this.handleChangeMobile(text)}} value={this.state.phoneNumber} style={[styles.txtInput, !this.state.isCorrect ? styles.failed: null]} maxLength={10}/>
                        </Item>
                    
                    </Form>
                    <View style={{flexDirection:'row', marginTop: 5}}>
                        <View>
                        <CheckBox 
                        value={false}
                        disabled={false}
                        tintColors = {false ? "#170db5" : "red"}
                        />
                        </View>
                        <View>
                        <Text style={{textDecorationLine:'underline', fontSize: 14, marginTop:8}}>I agree to privacy policies</Text>
                        </View>
                       

                        
                    </View>
                </View>
            
                <View style={{width:'80%'}}>
                <TouchableHighlight
                style={styles.button}
                onPress={this.handleCreate}
                >
                <Text style={{color:'#fff', fontSize: 16}}>Create an Account</Text>
            </TouchableHighlight>

                </View>


                <AwesomeAlert
          show={this.state.showAlert}
          showProgress={false}
          message="Please enter your details!"
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

            </View>
            </KeyboardAvoidingView>
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
        marginTop: 30, 
        borderRadius:30 
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

export default SignUpScreen;