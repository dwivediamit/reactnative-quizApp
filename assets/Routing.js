/* @flow */

import React from "react";

import { Platform,AsyncStorage, Root  } from "react-native";
// import { Root, StyleProvider } from "native-base";

import { List, ListItem } from 'react-native-elements'
import { StackNavigator } from 'react-navigation';

import Landing_screen from '../screens/landing_screen';
import Question_screen from '../screens/Question_screen';

console.disableYellowBox = true;

//const RTL = true;
//alert(RTL);
//const RTL = AsyncStorage.getItem('loggedin');

const RootStackNavigator = StackNavigator(
  {
    Landing_screen: {
      screen: Landing_screen,
    },
    Question_screen: {
      screen: Question_screen,
    },
  },

  {
        initialRouteName: "Landing_screen",
        //initialRouteName: RTL ? 'Artboard' : 'MainScreenNavigator',
        headerMode: "none",
  },
  {
    navigationOptions: () => ({
      headerTitleStyle: {
        fontWeight: 'normal',
      },
    }),
  }
);

// export default () =>

//     <Root>
//         <AppNavigator />
//     </Root>;

export default class Routing extends React.Component {

  render() {
    return <RootStackNavigator />;
  }

}

//    BackHandler.addEventListener('hardwareBackPress', function() {
//   // this.onMainScreen and this.goBack are just examples, you need to use your own implementation here
//   // Typically you would use the navigator here to go to the last state.
//   alert("Exit");
// exitApp();

// });
