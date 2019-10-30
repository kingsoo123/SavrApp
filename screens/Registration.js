import React, { Component } from 'react';
import {View, Text, StyleSheet, Image,TouchableHighlight} from 'react-native';
import {Form, Input, Item} from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts';
import Axios from 'axios';

class RegScreen extends Component{
    constructor(props){
        super(props);
        this.state={
            pinNumber:'',
            name:'',
            address:'',
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

      handleChangePin=(text)=>{
        if(text === '' || isNaN(text)){
         this.setState({isCorrect:!this.state.isCorrect, pinNumber:''}) 
        }else{
            this.setState({pinNumber: text, isCorrect: true})
            }
    }

    handleChangeKin=(text)=>{
        if(text === '' || !isNaN(text)){
         this.setState({isCorrect: !this.state.isCorrect, name:''})
        }else{
            this.setState({name: text, isCorrect: true})
            }
    }

    handleChangeContact=(text)=>{
        if(text === '' || isNaN(text)){
         this.setState({isCorrect: !this.state.isCorrect, address:''})
        }else{
            this.setState({address: text, isCorrect:true})
            }
    }



    handleCreate = async()=>{
        try {
            const {name, pinNumber, address} = this.state;
            if(name === '' || !isNaN(name) || pinNumber === '' || isNaN(address)){
                this.showAlert()
            }else{
                const saver = await Axios.post('https://savrapi.herokuapp.com/nextofkin', {pinNumber,name,address});
                const data = saver.data;
                //console.log(data)

                /* const nameVal = data.data.name;
                const emailVal = data.data.email;
                const phoneNumberVal = data.data.phoneNumber; */
                alert(`Please don't forget your  ${pinNumber}`);
                this.props.navigation.navigate('Notice');
                this.state.pinNumber ='';
                this.state.address ='';
                this.state.name =''
                //Axios.get('http://192.168.4.105:2020/saver');
            }
           
            
            
        } catch (error) {
            console.warn(error)
        }
        
          
        }

    render(){
        return (
            <View style={styles.container}>
                <View>
                    <Image source={require('../assets/images/logo.png')}/>
                    
                </View>
                <View style={{width:'90%'}}>
                <Text style = {styles.introText} >Complete your registration</Text>
                </View>
                <View style={{width:'80%', marginTop: 20}}>
                    <Form>
                        <Item regular>
                        <Input placeholder='Set your four digits PIN' onChangeText={(text)=>{this.handleChangePin(text)}} value={this.state.pinNumber} style={[styles.txtInput, !this.state.isCorrect ? styles.failed: null]} maxLength={4}/>
                        </Item>
                        <Text>{""}</Text>
                        <Item regular>
                        <Input placeholder='Next of Kin' onChangeText={(text)=>{this.handleChangeKin(text)}} value={this.state.name} style={[styles.txtInput, !this.state.isCorrect ? styles.failed: null]} maxLength={20}/>
                        </Item>
                        <Text>{""}</Text>
                        <Item regular>
                        <Input placeholder='Phone number' onChangeText={(text)=>{this.handleChangeContact(text)}} value={this.state.address} style={[styles.txtInput, !this.state.isCorrect ? styles.failed: null]} maxLength={10}/>
                        </Item>
                    
                    </Form>
                    <View style={{marginTop: 5}}>
                        <Text style={{fontSize: 14, marginTop:8, textAlign:'center'}}>Next of kin information is needed in the case of emergency</Text>
                    </View>
                </View>
            
                <View style={{width:'80%'}}>
                <TouchableHighlight
                style={styles.button}
                onPress={this.handleCreate}
                >
                <Text style={{color:'#fff', fontSize: 16}}>Finish</Text>
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
        color:'#6c63ff',
        fontSize: 23,
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

export default RegScreen;