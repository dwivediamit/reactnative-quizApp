import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Button, Alert } from 'react-native';

import { LinearGradient } from "expo";

const { width, height } = Dimensions.get('window');
// const HeartImg = require("../assets/heart.gif");

export default class Question_screen extends React.Component {
  _handleButtonPress = () => {
    Alert.alert(
      'Button pressed!',
      'You did it!',
    );
  };

  render() {
    return (
      <View style={styles.container}>
      
        <LinearGradient
              colors={['#2c41e2', '#882d87', '#e62f2d']}
              style={{ width: width,
             alignItems: 'center',height: height, justifyContent: 'center'
              }}
            >
            <View style={{flexDirection: 'row', marginTop: 20, flex: 1}}>
            <View style={{width: width/3, height: 100}}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={{ uri: 'http://bestanimations.com/Signs&Shapes/Hearts/heart-animation61.gif' }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
            </View>
            <View style={{width: width/3, height: 100}}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={{ uri: 'http://bestanimations.com/Signs&Shapes/Hearts/heart-animation61.gif' }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
            </View>
            <View style={{width: width/3, height: 100}}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={{ uri: 'http://bestanimations.com/Signs&Shapes/Hearts/heart-animation61.gif' }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
            </View>
          </View>
          
          <View style={styles.question_section}>
            <View style={{alignItems: 'center', marginBottom: 10, marginTop: 10,}}>
                <Image
                  source={{ uri: 'http://bestanimations.com/Signs&Shapes/Hearts/heart-animation61.gif' }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
              <Text style={{ color: '#000', backgroundColor: 'transparent', fontSize: 28,
              paddingTop: 10,paddingBottom: 20, textAlign: 'center'}}>
                Which character in packman is considered the leader of the ghosts?
              </Text>
              <View style={styles.custom_button}>
              <Text style={{color: '#fff'}}>BLINKY</Text>
            </View>
            <View style={styles.custom_button}>
              <Text style={{color: '#fff'}}>BRSON</Text>
            </View>
            <View style={styles.custom_button}>
              <Text style={{color: '#fff'}}>CLYDE</Text>
            </View>
          </View>
            
            
            </LinearGradient>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
  
  custom_button:{
    marginBottom: 10,
    backgroundColor: "#7d3093",
    textAlign: 'center', 
    alignItems: 'center',
    paddingBottom: 15, 
    paddingTop: 15, 
    borderRadius: 30
    
  },

  question_section: {
    backgroundColor: "#fff",
    padding: 20,
    width: width-30,
    borderRadius: 8,
    marginBottom:10,
  }
});