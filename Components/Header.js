
import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { SearchBar } from 'react-native-elements';

class Header extends Component {
    state = {
        search: '',
      };
      updateSearch = (search) => {
        this.setState({ search });
      };
  render() {
    const { search } = this.state;
    return (
      <View>
        <View style={styles.header}>
            <View style={styles.headerLeft}>
              <Image style={styles.menuImg} source={require('../assets/delivery-man.png')}/>
              <Text style={{color: 'white'}}>  Lieu sélectionné </Text>
              <Image style={styles.menuArrow} source={require('../assets/arrow-down.png')}/>
            </View>
            <View>
              <Image style={styles.menuImg} source={require('../assets/userProfile.png')}/>
            </View>
            
        </View>  
        <SearchBar placeholder="Plats, desserts..." lightTheme onChangeText={this.updateSearch} value={search} containerStyle={{ paddingBottom: 0, backgroundColor: 'transparent', borderTopColor: 'transparent', borderBottomColor: 'transparent', shadowColor: "#000", shadowOffset: { width: 0, height: 7, }, shadowOpacity: 0.41, shadowRadius: 9.11, elevation: 14,}} inputContainerStyle={{borderRadius: 100, backgroundColor: 'white'}} color='black'/> 
      </View>
    )
  
    }
}
const styles = StyleSheet.create({
    header:{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 8,
        paddingLeft: 20,
        paddingRight: 20,
        backgroundColor: '#00c2b3',
        paddingTop: 50,
        marginBottom: -35
      },
      headerLeft:{
        flexDirection: "row",
        justifyContent: 'center',
        alignItems: 'center',
        margin: 'auto',
        paddingBottom: 30
      },
      searchBar: {
        marginTop: 10,
        backgroundColor: '#C2C2C2',
      },
      menuImg:{
        width:30,
        height: 30
      },
      menuArrow:{
        width:10,
        height: 10
      },
  });

  export default Header;