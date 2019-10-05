import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';

import { Video } from 'expo';

const { width, height } = Dimensions.get('window');
// const HeartImg = require("../assets/heart.gif");

const Ad_video = require("../videos/Digital_Ad.mp4");

export default class Landing_screen extends React.Component {

	constructor(props) {
        super(props);
    }

    // setTimeout(() =>{
    //   this.props.navigation.navigate('Question_screen');
    // }, 6000);

    componentDidMount() {
  setTimeout(() =>{
      this.props.navigation.navigate('Question_screen');
    }, 6000);
}



  render() {
    return (
      <View style={styles.container}>
      
        
        <Video
          source={Ad_video}
          rate={1.0}
          volume={1.0}
          muted={false}
          resizeMode="cover"
          shouldPlay
          isLooping
          style={{ width: width, height: height }}
        />
        <View style={styles.overlay_section}>
          <View style={{flex: 1, flexDirection: 'row', marginTop: 20,}}>
            <View style={{width: width/2, height: 100}}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={{ uri: 'http://bestanimations.com/Signs&Shapes/Hearts/heart-animation61.gif' }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
            </View>
            <View style={{width: width/2, height: 100}}>
              <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Image
                  source={{ uri: 'http://bestanimations.com/Signs&Shapes/Hearts/heart-animation61.gif' }}
                  style={{ height: 50, width: 50 }}
                />
              </View>
            </View>
          </View>
        </View>
      
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  overlay_section:{
    width: width, 
    height: height,
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    zIndex: 999
    
  }
});