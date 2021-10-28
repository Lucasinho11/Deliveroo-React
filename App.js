/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  ImageBackground
} from 'react-native';
import { SearchBar, Card } from 'react-native-elements';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      
        <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image style={styles.menuImg} source={require('./assets/delivery-man.png')}/>
              <Text>  Lieu sélectionné </Text>
              <Image style={styles.menuArrow} source={require('./assets/arrow.png')}/>
            </View>
            <View>
              <Image style={styles.menuImg} source={require('./assets/profile.png')}/>
            </View>
        </View>   
        <ScrollView>
          <ScrollView horizontal={true} style={{paddingBottom: 10}}>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('./assets/burger.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Burgers</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('./assets/pizza2.png')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Pizzas</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('./assets/sushi.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Sushis</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('./assets/gateau.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Gâteaux</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('./assets/tacos.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Tacos</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('./assets/sandwich.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Sandwichs</Text>
              </ImageBackground>
            </Card>
            
          </ScrollView>
        </ScrollView>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  header:{
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 8,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.2,
    paddingLeft: 20,
    paddingRight: 20
  },
  headerLeft:{
    flexDirection: "row",
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto'
  },
  searchBar: {
    marginTop: 10,
    backgroundColor: '#C2C2C2',
  },
  profileImg:{
    width: 50,
    height: 50,
  },
  menuImg:{
    width:30,
    height: 30
  },
  menuArrow:{
    width:20,
    height: 20
  },
  cardCategories:{
    borderRadius: 10,
    width: 80,
    height: 80,
    borderWidth: 0,
    padding: 0,
    margin: 4,
    marginTop: 10
  },
  imgCategories: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    flexDirection: "column",
    justifyContent: 'flex-end',
    
  },
  textCategories:{
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    paddingLeft: 5,
    paddingBottom: 5
    
    
  }

});

export default App ;
