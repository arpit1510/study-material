import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";


const appIcon  = require("../assets/logo.png")
export default class AppHeader extends React.Component{
  render(){
    return(
      <View style= {styles.textContainer}>
        <Text style={styles.text}>Study Material</Text>
            <Image source={appIcon} style={styles.appIcon} />
      </View>
     
  
     
    );
  }
}

const styles = StyleSheet.create({
  textContainer:{
    backgroundColor: '#111111',
},
  text:{
    color: 'white',
    padding: 12,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'left',
},
appIcon: {
    width: RFValue(100),
    height: RFValue(100),
    resizeMode: "center",
    marginBottom:RFValue(5),
    marginLeft: RFValue(290),
    marginTop: RFValue(1)
},
container: {
    flex: 1,
 
    backgroundColor: "#15193c",
    alignItems:"center",
    justifyContent:"center",

  },
});