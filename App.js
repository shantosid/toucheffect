/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  Dimensions
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = { click: 0, displayBlock : false, x: 0, y: 0 };
    this.onPress = this.onPress.bind(this);
  }

  onPress = (evt) =>{
    this.setState({
      displayBlock: true,
      x: evt.nativeEvent.locationX,
      y: evt.nativeEvent.locationY,
      click: this.state.click+1,
    })
  } 

  render(){
    
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.body} onPress = {(evt) => this.onPress(evt)}>
          <View style={{ position: "absolute" }}>

            <Text style={{
              position: "absolute", 
              top: 0,
              fontSize: 40, 
              fontFamily: 'Catamaran-Black', }} 
                >  (: The </Text>
            
            <Text
              style={{ position: "absolute", 
              top: 50,
              left: 50, 
              fontSize: 40, 
              color: 'red', 
              fontFamily: 'IndieFlower',
            }}>  End  </Text>
            <Text style={{ 
              position:'absolute', 
              color: '#400d04', 
              fontFamily: 'Catamaran-Black', 
              top: 20,
              left: 150,
              fontSize: 70}}
                >Of</Text>
            
            <Text style={{ 
              position:'absolute',
              top: 115,
              left: 170,
              color: '#400d04', 
              fontSize: 40,
              color: 'red', 
              fontFamily: 'IndieFlower' 
              }}>  The  </Text>
            <Text style={{ 
              position:'absolute', 
              top: 450,
              left: 100,
              color: '#400d04',  
              fontSize: 40, 
              fontFamily: 'Barriecito' 
              }}>   ***king </Text>
            <Text 
              style={{ 
                position:'absolute', 
                top: 500,
                left: 130,
                color: '#400d04', 
                fontSize: 45, 
                color: 'grey', 
                fontFamily: 'IndieFlower' }}>  World : </Text>
            <Text 
              style={{ 
                position:'absolute', 
                top: 500,
                left: 290,
                color: '#400d04', 
                fontSize: 45, 
                color: 'grey', 
                fontFamily: 'IndieFlower' }}>  {this.state.click} </Text>
          
          <View style={{
            position:'absolute',
            left: this.state.x-5,
            top: this.state.y-5,
            width: 10,
            height: 10,
            borderRadius: 100/2,
            backgroundColor: 'red',
            transform: [{'translate': [0,0,1]}]
            }}>
          </View>

          </View>
          
        </TouchableOpacity>
      </View>
    )
  }

}


const styles = StyleSheet.create({
  body: {
    backgroundColor: 'skyblue',
    width: '100%',
    height: '100%',
  }
});