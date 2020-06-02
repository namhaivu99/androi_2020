import React, { Component } from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import Header from '../Header';
import TopProducts from './TopProducts/TopProducts';
import Drawer from 'react-native-drawer'
import Shop from '../Shop/Shop'
import Main from '../Main'
import Menu from '../Menu'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Home extends Component {
  closeControlPanel = () => {
    this.drawer.close()
  };
  openControlPanel = () => {
    this.drawer.open()
  };
  render() {
    return (

      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={this.openControlPanel}>
          <Text>
            Open Menu
          </Text>
        </TouchableOpacity>
        <Drawer
          ref={(ref) => this.drawer = ref}
          content={<Menu style={{ flex: 1 }}/>}
          openDrawerOffset={0.4}
          tapToClose={true}
        >
         <Header />
        <ScrollView style={{ flex: 1, backgroundColor: '#F8F8FF' }} >
          <TopProducts />
        </ScrollView>
        </Drawer>
       
      </View>
    );
  }
}
