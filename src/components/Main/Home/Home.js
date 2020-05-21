import React, {Component} from 'react';
import { View,Text, ScrollView,Image } from 'react-native';
import Header from '../Header';
import TopProducts from './TopProducts/TopProducts';
export default class Home extends Component{
  render(){
    return (
      <View style = {{flex:1}}>
          <Header/>
          <ScrollView style ={{flex:1 ,backgroundColor:'#F8F8FF'}} >
            <TopProducts/>
          </ScrollView>
        </View>
    );
  }
}
