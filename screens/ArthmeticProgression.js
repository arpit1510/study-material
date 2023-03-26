import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet, Image } from 'react-native';

import { RFValue } from "react-native-responsive-fontsize";

export default class ArthmeticProgression extends Component {
  render() {
    return (
     <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"#00FF00"}}> Arthmetic Progression </Text>
        <Text> </Text>
        <Image
                source={require("../assets/5.1.png")}
                style={styles.image}
              ></Image>
               <Text> </Text>
        <Image
                source={require("../assets/5.2.png")}
                style={styles.image}
              ></Image>
               <Text> </Text>  
               <Image
                source={require("../assets/5.3.png")}
                style={styles.image}
              ></Image>
        <TouchableOpacity
              style={styles.buttons}
            onPress={() =>this.props.navigation.navigate('Home')}>
              <Text style={{ fontSize:20, color:"white"}}>Back</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
     alignItems: 'center',
     justifyContent: 'center',
     marginTop: 100 
    },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"green",
    margin: 10,
    width: 200,
    height: 50,
  },
  image: {
    width: "100%",
    alignSelf: "center",
    height: RFValue(200),
    borderTopLeftRadius: RFValue(20),
    borderTopRightRadius: RFValue(20),
    resizeMode: "contain"
  }
})