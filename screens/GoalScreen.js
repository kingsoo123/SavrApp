import React, {Component} from 'React';
import {View, Text, StyleSheet, TouchableHighlight, Image, TouchableOpacity} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Left, Right,Accordion} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import Dash from 'react-native-dash';


class GoalScreen extends Component{
  state={
    dataArray : [
      { title: "My wedding savings", content: <Text style={{backgroundColor: "#e3f1f1",padding: 10,fontStyle: "italic",}} onPress={()=>{this.props.navigation.navigate('IndividualGoal')}}>View More</Text> },
      { title: "My car savings", content: <Text style={{backgroundColor: "#e3f1f1",padding: 10,fontStyle: "italic",}} onPress={()=>{this.props.navigation.navigate('IndividualGoal')}}>View More</Text> },
      { title: "My office savings", content: <Text style={{backgroundColor: "#e3f1f1",padding: 10,fontStyle: "italic",}} onPress={()=>{this.props.navigation.navigate('IndividualGoal')}}>View More</Text> },
      { title: "My pet savings", content: <Text style={{backgroundColor: "#e3f1f1",padding: 10,fontStyle: "italic",}} onPress={()=>{this.props.navigation.navigate('IndividualGoal')}}>View More</Text>  },
      { title: "My house savings", content: <Text style={{backgroundColor: "#e3f1f1",padding: 10,fontStyle: "italic",}} onPress={()=>{this.props.navigation.navigate('IndividualGoal')}}>View More</Text> }
    ],
  }
 
 
    render(){
   
        return(
            
            <Container>
            <Header style={styles.header}>
              <Left><Text style={{fontSize:20, marginLeft: 10, color:'#828284'}}>My Goals</Text></Left>
              
              <Right>
                <View>
                <Image source={require('../assets/images/profileImage.png')} style={{width: 40, height: 40}} />
                </View>
              </Right>
            </Header>
               <Content style={{backgroundColor:'#6c63ff'}}>
                 <View style={{display:'flex', flexDirection:'column', alignItems:'center'}}>
                 <Text style={{fontSize:30, color:'#fff', marginTop:15}}>My Goal List</Text>
      
                 </View>

                 <View style={{width: '80%', justifyContent:'center', alignSelf:'center', marginTop:30}}>
                    <Accordion dataArray={this.state.dataArray}  headerStyle={{ backgroundColor: "#b7daf8" }}
                    contentStyle={{ backgroundColor: "#ddecf8" }} animation={true}/>
                </View>

                 <View style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', paddingBottom:20}}>
                     <View style = {[styles.boxes, styles.third]}>
                     <Text style={styles.savings}>Set New Goal</Text>
                     <Dash style={{width:'90%'}} dashColor='#D3D3D3' dashThickness={1}/>
                     <View style={{width:'90%', alignItems: 'flex-end'}}>
                        <TouchableHighlight
                            style={styles.button}
                            onPress={()=>this.props.navigation.navigate('Goal')}
                        >
                            <Text style={{color:'#fff', fontSize: 16, paddingLeft:8, paddingRight:8}}>Start Now</Text>
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


GoalScreen.navigationOptions = {
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
          height: 110,
          marginTop:30,
          borderRadius: 20,
          paddingLeft: 20,
          paddingTop:17, 
          shadowColor: "#000",
          shadowOffset: {width: 2,height: 2,},
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 4,
          
      },
    
      third:{
          backgroundColor:'#6c63ff'
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
      table2:{
        width:'33%',
        alignItems:'center',
        padding:5
      } ,
      table:{
        width:'33%',
        alignItems:'center',
        padding:6
      } 
})

export default GoalScreen;