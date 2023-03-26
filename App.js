import React from "react";
import {Text , View ,StyleSheet} from "react-native";
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import Login from "./screens/Login"
import Home from "./screens/Home"
import Register from "./screens/Register"
import Polynomials from "./screens/Polynomials"
import RealNumbers from "./screens/RealNumbers"
import LinearEquation from "./screens/LinearEquation"
import QuadraticEquation from "./screens/QuadraticEquation"
import Triangles from "./screens/Triangles"
import ArthmeticProgression from "./screens/ArthmeticProgression"
import CoordinateGeometry from "./screens/CoordinateGeometry"
import Trignometry from "./screens/Trignometry"
import ApplicationOfTrignometry from "./screens/ApplicationOfTrignometry"




export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator = createSwitchNavigator({
  Home:Home,
  Polynomials:Polynomials,
  RealNumbers:RealNumbers,
  LinearEquation:LinearEquation,
  QuadraticEquation:QuadraticEquation,
  ArthmeticProgression:ArthmeticProgression,
  Triangles:Triangles,
  CoordinateGeometry:CoordinateGeometry,
  Trignometry:Trignometry,
  ApplicationOfTrignometry:ApplicationOfTrignometry

});

const AppContainer = createAppContainer(AppNavigator);
