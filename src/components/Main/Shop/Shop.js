import React, {Component} from 'react';
import {
  View,Text,Image,TouchableOpacity,Dimensions,FlatList,
  StyleSheet,ScrollView
} from 'react-native';
import icAvatar from '../../../media/appIcon/banner.jpg';
import icLogo from '../../../media/appIcon/logo.jpg';
const {height,width} = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
export default function(props) {
  const navigation = useNavigation();

  return <ProductView {...props} navigation={navigation} />;
}
class ProductView extends Component{
  render(){
    const { navigation } = this.props;
    const {headerStyle,addStyle,iconStyle,avatarStyle,topStyle
    }= styles;
    return(
      <View style={{flex:1}}>
        <View style ={headerStyle}>
          <View style = {topStyle}>
            <Image source={icAvatar} style={avatarStyle} />
            <Text style ={{fontSize:30,fontWeight:'bold',color:'#FFF'}}> DONG LAO SHOP </Text>
            <Image source={icLogo} style={iconStyle}/>
          </View>
          <View style = {{flex:1,alignItems:'center',justifyContent:'center'}}>
            <TouchableOpacity style ={addStyle} onPress={() => navigation.navigate('AddProduct')}>
              <Text style ={{fontSize:25}}>thêm sản phẩm </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style ={{flex:4,backgroundColor:'#FFF'}}>
          <ScrollView>
          </ScrollView>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  headerStyle:{
    flex:1,
    backgroundColor:'#607D8B',
  },
  iconStyle:{
    height:40,
    width:40,
  },
  avatarStyle:{
    height:60,
    width:60,
    borderRadius:30
  },
  addStyle:{
    backgroundColor:'#FFF',
    height:height*0.06,
    width:width*0.8,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:width*0.4
  },
  topStyle:{
    flex:1,flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  }
})
