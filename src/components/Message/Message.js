import React, {Component} from 'react';
import {
  View,Text,Image,TouchableOpacity,Dimensions,FlatList,
  StyleSheet
} from 'react-native';
import icBack from '../../media/appIcon/backB.png';
import icSearch from '../../media/appIcon/searchG.png';
import icAvatar from '../../media/appIcon/banner.jpg';
import { useNavigation } from '@react-navigation/native';
const {height,width} = Dimensions.get('window');
export default function(props) {
  const navigation = useNavigation();

  return <Message {...props} navigation={navigation} />;
}
class Message extends Component{
  render(){
    const { navigation } = this.props;
    const {headerStyle,backStyle,inputStyle,listStyle,titleStyle,
      avatarStyle,chatStyle
    }= styles;
    return(
      <View style={{flex:1,backgroundColor:'#F8F8FF'}}>
        <View style ={headerStyle}>

          <View style ={titleStyle}>
            <Image source ={icAvatar} style ={avatarStyle}/>
            <Text style ={chatStyle}> Chat </Text>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image source ={icBack} style ={backStyle}/>
            </TouchableOpacity>
          </View>
          <View style ={{flex:2}}>
            <TouchableOpacity style={inputStyle}>
              <Image source ={icSearch} style={{height:30,width:30}} />
              <Text style ={{fontSize:18,color:'#828282'}}>   Tim kiem </Text>
            </TouchableOpacity>
          </View>

        </View>

        <FlatList
          data={[
            {key: 'Devin',mess:'../../media/appIcon/banner.jpg'},
            {key: 'Dan',mess:'../../media/appIcon/banner.jpg'},
            {key: 'Dominic',mess:'../../media/appIcon/banner.jpg'},
          ]}
          renderItem={({item}) =>
            <TouchableOpacity style={listStyle} onPress={() => navigation.navigate('ChatView')}>
              <View style ={{flex:1}}>
                <Image source={require('../../media/appIcon/banner.jpg')} style ={avatarStyle}/>
              </View>
              <View style ={{flex:4,paddingLeft:10}}>
                <View style ={{flex:1,  justifyContent:'center',}}>
                  <Text style ={{fontSize:23}}>{item.key}</Text>
                </View>
                <View style ={{flex:1,  justifyContent:'center',}}>
                  <Text style ={{fontSize:20,color:'#BEBEBE'}}>{item.mess}</Text>
                </View>
              </View>
            </TouchableOpacity>
         }
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  headerStyle:{
    height:height*0.18,
    backgroundColor:'#FFF',
    paddingLeft : 20,
    paddingRight: 20,

  },
  backStyle:{
    height:30,
    width:40
  },
  inputStyle:{
    height:'80%',
    backgroundColor:'#F0F2F5',
    paddingLeft:20,
    borderRadius:30,
    justifyContent:'flex-start',
    alignItems:'center',
    flexDirection:'row',
    paddingLeft : 20,
  },
  listStyle:{
    backgroundColor:'#FFF',
    height:height*0.09,
    marginTop:5,
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:20,
  },
  titleStyle:{
    flex:3,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
  },
  avatarStyle:{
    height:70,
    width:70,
    borderRadius:35
  },
  chatStyle:{
    fontSize:30,
    fontWeight:'bold',
    marginRight:width*0.4
  }
})
