import React, {Component} from 'react';
import {
  View,Text,Image,TouchableOpacity,Dimensions,TextInput,
  StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import icSearch from '../../media/appIcon/cart1.png';
import icChat from '../../media/appIcon/chat.png';
const {height} = Dimensions.get('window');
export default function(props) {
  const navigation = useNavigation();

  return <Header {...props} navigation={navigation} />;
}
class Header extends Component{
  render(){
    const {wrapper,logo,iconStyle,searchStyle,cartStyle,chatStyle} = styles;
    const { navigation } = this.props;
    return (
      <View style = {wrapper}>
        <View style ={logo}>
          <TouchableOpacity style={searchStyle} onPress={() => navigation.navigate('Search')}>
            <Text style ={{fontSize:23,color:'#607D8B'}}> tim kiem </Text>
          </TouchableOpacity>
        </View>
        <View style ={iconStyle}>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <Image source={icSearch} style={cartStyle}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Message')}>
            <Image source={icChat} style={chatStyle}/>
          </TouchableOpacity>
        </View>
      </View>

    );
  }
}
const styles = StyleSheet.create({
  wrapper:{
    height:height*0.07,
    backgroundColor:'#607D8B',
    padding: 5,
    flexDirection:'row',
    justifyContent:'space-between',
    borderBottomColor: '#F8F8FF',
    borderBottomWidth: 2,
  },
  logo:{
    flex:4,
    justifyContent:'center',
    alignItems:'center',

  },
  iconStyle:{
    flexDirection:'row',
    justifyContent:'space-around',
    flex:1
  },
  cartStyle:{
    marginRight:15,
    height:45,
    width:45,
  },
  chatStyle:{
    marginRight:5,
    marginTop:9,
    height:30,
    width:30,
  },
  searchStyle:{
    borderRadius:30,
    backgroundColor:'#FFF',
    width:'90%',
    height:'85%',
    justifyContent:'center',
    paddingLeft:15,
    paddingBottom:3
  }
});
