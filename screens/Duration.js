import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableHighlight, Slider, ScrollView} from 'react-native';
import {Picker, Form, Icon} from "native-base";
import Dash from 'react-native-dash';



class DurationScreen extends Component{
    constructor(props) {
        super(props);
        this.state = {
          selected: "",
          showDuration:["Daily", "Weekly", "Bi-weekly","Monthly"],
          displayDuration:'Daily',
          showPeriod:1,
          numberDays: [365, 52, 26, 12],
          maxVals: 365,
          days:["days", "weeks", "months"],
          time: "days"
        };
      }
      onValueChange(value) {
        this.setState({
          selected: value,
          displayDuration:value==="key0"? this.state.showDuration[0]: null 
          || value==="key1"? this.state.showDuration[1]: null || 
          value==="key2"? this.state.showDuration[2]: null || 
          value==="key3"? this.state.showDuration[3]: null,
          

          time:value === "key1"? this.state.days[1] : null ||
          value === "key2" ? this.state.days[1] : null ||
          value === "key3" ? this.state.days[2]: null ||
          value === "key0"? this.state.days[0] : null,

          maxVals:value === "key1" ? this.state.numberDays[1]: null ||
          value === "key2" ? this.state.numberDays[2] : null ||
          value === "key3" ? this.state.numberDays[3]: null ||
          value === "key0" ? this.state.numberDays[0] : null,
          
        });

      }


    render(){
     
        return(
            <ScrollView>
            <View style={styles.container}>
               
            <View style={styles.imgLogo}>
                <Image source={require('../assets/images/logo.png')}/>
                
            </View>
            <View>
            <Text style = {styles.introText} >Frequency</Text>
            <Text style={{textAlign:'center', color:'#D3D3D3'}}>How often would like to save?</Text>
            </View>

            <View style={styles.pickDuration}>
       
             <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="arrow-down" />}
              headerBackButtonText="Baaack!"
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Daily" value="key0" />
              <Picker.Item label="Weekly" value="key1" />
              <Picker.Item label="Bi-weekly" value="key2" />
              <Picker.Item label="Monthly" value="key3" />
            </Picker>
          </Form>
            </View>
            <Dash style={{width:'70%', marginTop: 30}} dashColor='#D3D3D3' dashThickness={1}/>
            <View>
            <Text style = {styles.introText} >Duration</Text>
            <Text style={{textAlign:'center', color:'#D3D3D3'}}>For how long would like to save?</Text>
            </View>
            <View style={styles.progressStyle}>
                <Text>{this.state.displayDuration} ({Math.floor(this.state.showPeriod)} {this.state.time})</Text>
             


                <Slider
                    style={{width: 300, height: 80}}
                    minimumValue={1}
                    maximumValue={this.state.maxVals}
                    minimumTrackTintColor="#170db5"
                    maximumTrackTintColor="#000000"
                    value={this.state.showPeriod}
                    onValueChange={(showPeriod)=>{this.setState({showPeriod})}}
                />
            <TouchableHighlight
                style={styles.button}
                onPress={()=>this.props.navigation.navigate('Account')}
                >
                <Text style={{color:'#fff', fontSize: 16}}> Next </Text>
            </TouchableHighlight>
            </View>
            
            </View>
            </ScrollView>
        )
    }
}

/* DurationScreen.navigationOptions = {
    header: true,
  }; */

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop: 30,
        paddingBottom:20,
        alignItems:'center',
        height:'100%'
    },
    introText:{
        width: 250,
        color:'#6c63ff',
        fontSize: 30,
        letterSpacing: 3,
        textAlign:'center',
        marginTop: 20
      },
      pickDuration:{
          width:"70%",
          marginTop: 30,
          display:'flex',
          justifyContent:'center',
          alignContent:'center',
          borderColor:'#6c63ff',
          borderWidth:1
      },
      durationDrop:{
          height:45
      },
   
      progressStyle:{
          marginTop: 20,
          width:'80%'
      },
      button: {
        alignItems: 'center',
        backgroundColor: '#0f52ba',
        padding: 10,
        marginTop: 10, 
        borderRadius:30 
      },

});

export default DurationScreen;