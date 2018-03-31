import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Header from './src/components/Header/Header';
import Footer from './src/components/Footer/Footer';

import Router from './Router';

export default class App extends React.Component {
  render() {
    return (
      <Router />
    );
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// {/* <Footer />
      // </View> */}



      // <View style={styles.container}>
      //   <Header title="test" />

      //   <Text>Router</Text>
// class HomeScreen extends React.Component {
//   render() {
//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Text>Home Screen</Text>
//       </View>
//     );
//   }
// }
