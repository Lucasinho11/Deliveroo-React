
import React, { Component } from 'react';

import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import Header from './Components/Header';
import Categories from './Components/Categories';
import Promotions from './Components/Promotions';
import Betters from './Components/Betters';
import Exclus from './Components/Exclus';
import Footer from './Components/Footer';


class App extends Component {
   
  
  render(){
  return (
    
    <View style={styles.container}>
        <Header/>
        <ScrollView>
          <Categories/>
          <Promotions/>
          <View style={{paddingBottom: 10}}>
            <Betters/>
            <Exclus/>
          </View>
          <Footer/>
        </ScrollView>
    </View>
  );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#ecf0f1',
  },
});

export default App ;
