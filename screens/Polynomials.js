import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Polynomials extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"#00FF00"}}> Polynomials </Text>
        <Text> </Text>
        <Text style={styles.points}>1) Revision Notes</Text>
        <Text> </Text>
        <Text style={styles.points}> *  Polynomials: An algebraic expression in the {"\n"}     form of anxn + an-1xn-1 + an-2xn-2 (where {"\n"}     n is a whole number and other are real {"\n"}    number) is called a Polynomial in one variable. </Text>
        <Text> </Text>
        <Text style={styles.points}> * Zero of a Polynomial: A real numbers K is{"\n"}     said to be a zero of a Polynomial. some {"\n"}     ex=> {"\n"}     {"\n"} 1) A linear Polynomial has only one zero. {"\n"} 2) A quadratic Polynomial has at most to zero. {"\n"} 3) A cubic Polynomial has at most three zeros.</Text>
        <Text> </Text>
        <Text style={styles.points}>2) Formulas</Text>
        <Text> </Text>
        <Text style={styles.points}>1) => zero of linear Polynomial ->{"\n"}    (-1)Constant term/coefficient term</Text>
        <Text> </Text>
        <Text style={styles.points}>2) => zero of Quadratic Polynomial ->{"\n"}
      (-1) coefficient of x/coefficient of x2</Text>
        <Text> </Text>
        <Text style={styles.points}>Some Imported Formulas => {"\n"} </Text>
        <Text> </Text>
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
     marginTop: 10
    },
  points:{
    fontSize: 15
  },
    buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"#a881af",
    margin: 10,
    width: 200,
    height: 50,
  }
})