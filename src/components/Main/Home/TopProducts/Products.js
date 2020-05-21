import React, {Component} from 'react';
import { Text, View,Image,StyleSheet,Dimensions,TouchableOpacity,ScrollView} from 'react-native';
import  image from '../../../../media/appIcon/banner.jpg';
const {height,width} = Dimensions.get('window')
export default class TopProducts extends Component{
  render(){
    const {imageStyle,touchableOpacityStyle}= styles;
    return(

        <TouchableOpacity style ={touchableOpacityStyle}>
          <View style={{flex:1}}>
            <View style ={{flex:2,alignItems:'center'}}>
              <Image source = {image} style ={imageStyle}/>
            </View>
            <View style ={{flex:1,justifyContent:'space-around',paddingTop:3}}>
              <Text>ten san pham </Text>
              <Text>da ban </Text>
            </View>
          </View>
        </TouchableOpacity>
    );

  }
}
const styles = StyleSheet.create({
  imageStyle:{
    height:'100%',
    width:'70%',
  },
  touchableOpacityStyle:{
    height:'100%',
    width:'22%',
    backgroundColor:'#FFF',
    padding:10,
    borderColor :'#E8E8E8',
    borderWidth :1,
    marginRight: 10,
  }
})
