import React, {Component} from 'react';
import {
  View,Text,Image,TouchableOpacity,Dimensions,FlatList,
  StyleSheet,TextInput
} from 'react-native';
import icBack from '../../media/appIcon/backW.png';
import icLogo from '../../media/appIcon/logo.jpg';
import { useNavigation } from '@react-navigation/native';
const {height,width} = Dimensions.get('window');
export default function(props) {
  const navigation = useNavigation();

  return <Search {...props} navigation={navigation} />;
}
class Search extends Component{
  constructor(props){
    super(props);
    this.state = {isProduct: true};
  }
  product(){
    this.setState({isProduct: true})
  }
  user(){
    this.setState({isProduct: false})
  }
  render(){
    const { navigation } = this.props;
    const {headerStyle,iconStyle,inputStyle,listStyle,touchStyle,touchStyle1
    }= styles;
    return(
      <View style={{flex:1,backgroundColor:'#FFF'}}>
        <View style ={headerStyle}>
          <View style ={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-around'}}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source={icBack} style={iconStyle} />
            </TouchableOpacity>
            <Text style ={{fontSize:35,fontWeight:'bold',color:'#FFF'}}> DONG LAO SHOP </Text>
            <Image source={icLogo} style={iconStyle}/>
          </View>
          <View style ={{flex:1,alignItems:'center',justifyContent:'center'}}>
            <TextInput style ={inputStyle}/>
          </View>
        </View>
        <View style ={{flex:1,flexDirection:'row'}}>
          <TouchableOpacity style = {this.state.isProduct ? touchStyle : touchStyle1} onPress = {this.product.bind(this)} >
            <Text style ={{fontSize:20}}>San pham</Text>
          </TouchableOpacity>
          <TouchableOpacity style = {!this.state.isProduct ? touchStyle : touchStyle1} onPress = {this.user.bind(this)}>
            <Text style ={{fontSize:20}}>Nguoi dung</Text>
          </TouchableOpacity>
        </View>
        <View style ={{flex: 10}}>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  headerStyle:{
    flex:3,
    backgroundColor:'#607D8B',
  },
  iconStyle:{
    height:40,
    width:40,
  },
  inputStyle:{
    backgroundColor:'#FFF',
    height: height*0.07,
    width:width*0.9,
    fontSize: 20,
    borderRadius:30
  },
  listStyle:{
    backgroundColor:'#FFF',
    height:height*0.09,
    marginTop:5,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20,
  },
  touchStyle:{
    flex:1,
    borderBottomWidth:4,
    borderBottomColor:'#607D8B',
    alignItems:'center',
    alignItems:'center',justifyContent:'center'
  },
  touchStyle1:{
    flex:1,
    borderBottomWidth:4,
    borderBottomColor:'#FFF',
    alignItems:'center',
    alignItems:'center',justifyContent:'center'
  }
})
