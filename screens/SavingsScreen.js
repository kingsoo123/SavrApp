import React, { Component } from 'react';
import {View,StyleSheet, Image, TouchableHighlight} from 'react-native';
import {Radio, ListItem,Text, Item,Input, Form} from 'native-base';
import AwesomeAlert from 'react-native-awesome-alerts';

class SavingsScreen extends Component {
    constructor(props){
super(props)
    }
    state = {
        isTouched1: false,
        isTouched2: false,
        isTouched3: false,
        isTouched4: false,
        amount: '240',
        listIt:null,
        inputText:null,
        showAlert: false,
        listDisable: false
     }


     touchMe1 = ()=>{
         if(this.state.isTouched1 === false){
            this.setState({isTouched1: true, isTouched2: false, isTouched3:false, isTouched4:false});
            console.log(this.state.amount)
         }else{
            this.setState({isTouched1: false});
         }
        
     }

     touchMe2 = ()=>{
         if(this.state.isTouched2 === false){
            this.setState({isTouched2: true, isTouched1:false, isTouched3:false, isTouched4:false});
         }else{
            this.setState({isTouched2: false});
         }
        
     }

     touchMe3 = ()=>{
         if(this.state.isTouched3 === false){
            this.setState({isTouched3: true, isTouched1: false, isTouched2:false, isTouched4:false});
         }else{
            this.setState({isTouched3: false});
         }
        
     }

     touchMe4 = ()=>{
         if(this.state.isTouched4 === false){
            this.setState({isTouched4: true, isTouched1:false, isTouched2:false, isTouched3:false});
         }else{
            this.setState({isTouched4: false});
         }
       
     }

  
     
     handleSubmit = ()=>{
        if(this.state.amount === ''){
            this.setState({inputText: <Input placeholder='Amount cannot be empty' keyboardType='numeric' maxLength={10} placeholderTextColor='red' returnKeyType="send" onSubmitEditing={this.handleSubmit} onChangeText={(text)=>{this.setState({amount:text})}}/>});
          return  
         }
        this.setState({listIt: <ListItem >
            <Radio selected= {true} /> 
            <Text>     ${this.state.amount}</Text>
            </ListItem>});
            this.setState({inputText: <Input placeholder='' keyboardType='numeric' maxLength={10} returnKeyType="send" onSubmitEditing={this.handleSubmit} onChangeText={(text)=>{this.setState({amount:text})}} />});
            this.setState({isTouched1: false});
            this.setState({isTouched2: false});
            this.setState({isTouched3: false});
            this.setState({isTouched4: false});
            this.setState({listDisable: true})
          
           
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

    componentWillMount(){
        this.setState({inputText: <Input placeholder='Enter amount' returnKeyType="send" keyboardType='numeric' maxLength={10} onSubmitEditing={this.handleSubmit} onChangeText={(text)=>{this.setState({amount:text})}}/>})
    }
    render() { 
         const {showAlert} = this.state;
        return ( 
            
            <View style={styles.container}>
                <View style={styles.imgLogo}>
                    <Image source={require('../assets/images/logo.png')}/>
                    <Text style = {styles.introText} >Set a savings goal.</Text>
                </View>
                
                <View style={{width:'80%'}}>
                <Form onSubmit={this.handleSubmit}>
                    <Item regular>
                       {this.state.inputText}
                    </Item>
                </Form>

                <ListItem onPress={()=>this.touchMe1()} disabled={this.state.listDisable}> 
                    <Radio selected={this.state.isTouched1} /> 
                    <Text>      $100</Text>       
                </ListItem>
                <ListItem onPress={()=>this.touchMe2()} disabled={this.state.listDisable}> 
                    <Radio selected={this.state.isTouched2}/> 
                    <Text>      $500</Text>       
                </ListItem >
                <ListItem onPress={()=>this.touchMe3()} disabled={this.state.listDisable}> 
                    <Radio selected={this.state.isTouched3} /> 
                    <Text>      $1000</Text>       
                </ListItem>
                <ListItem onPress={()=>this.touchMe4()} disabled={this.state.listDisable}> 
                    <Radio selected={this.state.isTouched4} />
                    <Text>      $1500</Text>       
                </ListItem>
                
                    {this.state.listIt}
        
               
                

                <TouchableHighlight
            style={styles.button}
            onPress={()=>this.props.navigation.navigate('Duration')}
            >
            <Text style={{color:'#fff', fontSize: 16}}> Next </Text>
        </TouchableHighlight>
                </View>




                <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="AwesomeAlert"
          message="I have a message for you!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          showConfirmButton={true}
          cancelText="No, cancel"
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
         );
    }
}
SavingsScreen.navigationOptions = {
    header: null,
  };

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 30,
        alignItems:'center',
    },
    imgLogo:{
        justifyContent:'center',
        alignItems:'center',
        marginTop: 20
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
})
export default SavingsScreen;