import React, {Component} from 'react';
import { Text, View,Image,StyleSheet,Dimensions} from 'react-native';
import Swiper from "react-native-web-swiper";
import  image from '../../../../media/temp/banner.jpg';
const {height} = Dimensions.get('window')
export default class Category extends Component{
  render(){
    const {wrapper,imageStyle,textStyle}= styles;
    return (
      <View style = {wrapper}>
        <View style={{flex:1, justifyContent:'center'}}>
            <Text style = {textStyle}>CATEGORY</Text>
        </View>
        <View style={{flex:6, justifyContent:'center',paddingTop:20}}>
            <Swiper autoplay={true} loop>
              <Image source = {image} style ={imageStyle}/>
              <Image source = {image} style ={imageStyle}/>
              <Image source = {image} style ={imageStyle}/>
              <Image source = {image} style ={imageStyle}/>
            </Swiper>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper:{
    height:height*0.3,
    backgroundColor: '#FFF',
    margin: 10,
    shadowColor: '#2E272B',
    shadowOffset:{width:0, height:3},
    shadowOpacity: 0.2,
    padding: 15,
    paddingTop:2
  },
  imageStyle:{
    height:180,
    width:'100%',
  },
  textStyle:{
    fontSize:25,
    color:'#2E8B57'
  }
})
