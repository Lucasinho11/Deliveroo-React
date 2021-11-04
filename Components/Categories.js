
import React, { Component } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements';

class Categories extends Component {
  render() {
    return (
      <View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} style={{paddingBottom: 10, paddingLeft: 10}}>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('../assets/burger.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Burgers</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('../assets/pizza2.png')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Pizzas</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('../assets/sushi.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Sushis</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('../assets/gateau.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Gâteaux</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('../assets/tacos.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Tacos</Text>
              </ImageBackground>
            </Card>
            <Card containerStyle={styles.cardCategories}>
              <ImageBackground source={require('../assets/sandwich.jpg')} style={styles.imgCategories} resizeMode="cover">
                <Text style={styles.textCategories}>Sandwichs</Text>
              </ImageBackground>
            </Card>
            
          </ScrollView>
      </View>
    )
  
    }
}
const styles = StyleSheet.create({
    cardCategories:{
        borderRadius: 10,
        width: 80,
        height: 80,
        borderWidth: 0,
        padding: 0,
        margin: 4,
        marginTop: 10,
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
      },
  });

  export default Categories;