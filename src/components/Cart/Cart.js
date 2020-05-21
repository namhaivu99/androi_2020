import React, {Component} from 'react';
import {
  View,Text,Image,TouchableOpacity,Dimensions,FlatList,
  StyleSheet,ScrollView
} from 'react-native';
import icBack from '../../media/appIcon/backW.png';
import icLogo from '../../media/appIcon/logo.jpg';
const {height,width} = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
export default function(props) {
  const navigation = useNavigation();

  return <ProductView {...props} navigation={navigation} />;
}
class ProductView extends Component{
  render(){
    const { navigation } = this.props;
    const {headerStyle,botStyle,iconStyle,buyStyle
    }= styles;
    return(
      <View style={{flex:1}}>
        <View style ={headerStyle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icBack} style={iconStyle} />
          </TouchableOpacity>
          <Text style ={{fontSize:30,fontWeight:'bold',color:'#FFF'}}> DONG LAO SHOP </Text>
          <Image source={icLogo} style={iconStyle}/>
        </View>
        <View style ={{flex:10,backgroundColor:'#F8F8FF'}}>
          <ScrollView style ={{backgroundColor:'#F8F8FF'}}>
            <Text> cho du lieu vao </Text>
          </ScrollView>
        </View>

        <View style ={botStyle}>
          <View style ={{flex:2,flexDirection:'row',alignItems:'center',}}>
            <View>
              <Text>Tổng tiền :</Text>
            </View>
          </View>
          <View style ={buyStyle}>
            <TouchableOpacity style ={{alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:25,color:'#FFF'}}>Mua hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  headerStyle:{
    flex:1,
    backgroundColor:'#607D8B',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around',
    borderBottomColor: '#F8F8FF',
    borderBottomWidth: 2,
  },
  iconStyle:{
    height:40,
    width:40,
  },
  botStyle:{
    flex:1,
    backgroundColor:'#FFF',
    flexDirection:'row',
    borderWidth :0.5 ,
    borderColor:'#607D8B'
  },
  buyStyle:{
    flex:1,
    backgroundColor:'#607D8B',
    alignItems:'center',
    justifyContent:'center'
  }
})
