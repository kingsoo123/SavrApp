import React, { Component } from 'react';
import {View, Text} from 'react-native';


class SideBar extends Component{
    render(){
        return(
            <View>
                <Text onPress={()=>this.props.navigation.navigate('Setup')}>
                Hello side bar
                </Text>
               
            </View>
        )
    }
}
SideBar.navigationOptions = {
    header: null,
  };


export default SideBar;