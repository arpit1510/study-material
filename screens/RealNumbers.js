import React, { Component } from 'react';
import { Text, View,TouchableOpacity, StyleSheet } from 'react-native';

export default class Polynomials extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize:30, backgroundColor:"#c52ff7"}}> Real Numbers </Text>
        <Text> </Text>
        <Text style={styles.points}>1) Topic-1  Fundamental Theorem of Arithmetic</Text>
        <Text> </Text>
        <Text style={styles.points}> *  Every composite number can be expressed {"\n"}     as {"\n"}       a product of prime and this factorisation is {"\n"}       unique, apart from the order in which the {"\n"}       prime factor occur.   </Text>
        <Text> </Text>
        <Text style={styles.points}> *  Any integer  greater than 1 can either be a {"\n"}     prime number or can be written as a unique {"\n"}     product of prime number. for ex => {"\n"}              {"\n"} 1)  2×11= 22 is the same as 11×2= 22. {"\n"} 2)  6 can be written as 2×3 or 5×3 , where 3 {"\n"}      and 5 are prime number. </Text>
        <Text> </Text>
        <Text style={styles.points}> *  The prime factorization of a natural number  {"\n"}     is unique,except to the order of its factor. </Text>
        <Text> </Text>
        <Text style={styles.points}>2) Topic-2  Irrational OR Irrantional Number</Text>
        <Text> </Text>
        <Text style={styles.points}> *  Rational Number: a number in the form of {"\n"}     p/q , where p and q are co-prime numbers {"\n"}     and q≠0 is known as rational numbers. for ex => -3/7 or 5/1</Text>
        <Text> </Text>
        <Text style={styles.points}> *  Irrantional Numbers: if it can not be written {"\n"}     in the form of p/q , where p and q are {"\n"}     intergers and q≠0. for ex =>  √2, √3, √5, {"\n"}    √11</Text>
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