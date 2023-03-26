import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Header,
  Image,
} from 'react-native';

import AppHeader from '../components/AppHeader';

export default class HomeScreen extends Component {
  render() {
    return (
      <View style = {styles.container}>
        <AppHeader />
        <View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('RealNumbers')}>
              <Text style={{ fontSize:20, color:"white"}}>Real Numers</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Polynomials')}>
              <Text style={{ fontSize:20, color:"white"}}>Polynomials</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('LinearEquation')}>
              <Text style={{ fontSize:20, color:"white"}}>Linear Equation</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('QuadraticEquation')}>
              <Text style={{ fontSize:20, color:"white"}}>Quadratic Equation</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ArthmeticProgression')}>
              <Text style={{ fontSize:20, color:"white"}}>Arithmetic Progression</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Triangles')}>
              <Text style={{ fontSize:20, color:"white"}}>Triangles</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('CoordinateGeometry')}>
              <Text style={{ fontSize:20, color:"white"}}>Coordinate Geometry</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('Trignometry')}>
              <Text style={{ fontSize:20, color:"white"}}>Trigonometry</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.buttons}
              onPress={() => this.props.navigation.navigate('ApplicationOfTrignometry')}>
              <Text style={{ fontSize:20, color:"white"}}>Application Of Trignometry</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonsContainer: {
    alignSelf: 'center',
    marginTop: 5,
  },
  buttons: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderRadius: 15,
    backgroundColor:"#555555",
    margin: 10,
    width: 250,
    height: 50,
  },
  ratingContainer: {
    alignSelf: 'center',
    marginTop: 50,
  },

  container: {
    backgroundColor: "#8A8A8A"
  }
});