import React, { Component } from 'react';
import {StyleSheet, Dimensions,View, Text, ScrollView,Image,TouchableOpacity} from 'react-native';
import  image from '../../../../media/temp/fit.jpg';
const {height,width} = Dimensions.get('window');

export default class Banner extends Component {
  constructor(props){
    super(props)
    this.state = {index: 1};
  }
  autoPlay = () => {
    this.scroller.scrollTo({x: width*this.state.index, y:0});
    if(this.state.index+1<3){
      this.setState({index:this.state.index+1})
    }else{
      this.setState({index:0})
    }
  };
  componentDidMount(){
    this.interval = setInterval(this.autoPlay, 3000);
  }
  render(){
    const {wrapper,imageStyle}= styles;
    return (
      <View style = {wrapper}>

        <View style ={{flex:4}}>
          <ScrollView
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          ref={(scroller) => {this.scroller = scroller}}

          >
              <Image style ={imageStyle} source = {require('../../../../../media/temp/fit.jpg')}/>
              <Image style ={imageStyle} source = {require('../../../../../media/temp/banner.jpg')}/>
              <Image style ={imageStyle} source = {require('../../../../../media/temp/maxi.jpg')}/>
          </ScrollView>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  wrapper:{
    height:height*0.2,
    backgroundColor: '#FFF',
  },
  imageStyle:{
    height:height*0.2,
    width:width,
  }
})
