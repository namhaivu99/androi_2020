import React, {Component} from 'react';
import {
  View,Text,Image,TouchableOpacity,Dimensions,
  StyleSheet,TextInput
} from 'react-native';
import icBack from '../../media/appIcon/back.png';
import icAvatar from '../../media/appIcon/banner.jpg';
import icSend from '../../media/appIcon/send.png';
import { useNavigation } from '@react-navigation/native';
const {height,width} = Dimensions.get('window');
export default function(props) {
  const navigation = useNavigation();

  return <ChatView {...props} navigation={navigation} />;
}
class ChatView extends Component{
  render(){
    const { navigation } = this.props;
    const {headerStyle,backStyle,avatarStyle,bottomStyle,inputStyle
    }= styles;
    return(
      <View style ={{flex:1,backgroundColor:'#FFF'}}>
        <View style={headerStyle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icBack} style={backStyle}/>
          </TouchableOpacity>
          <Image source={icAvatar} style={avatarStyle}/>
          <Text style ={{marginLeft:5,fontSize:20}}> Ten nguoi dung</Text>
        </View>
        <View style={{flex:12}}>
          <Text> avasda</Text>
        </View>
        <View style={bottomStyle}>
          <TextInput style ={inputStyle}/>
          <TouchableOpacity>
            <Image source={icSend} style = {{height:30,width:30}} />
          </TouchableOpacity>
        </View>
      </View>

    )
  }
}
const styles = StyleSheet.create({
  headerStyle:{
    flex:1,
    flexDirection:'row',
    borderBottomWidth:4,
    borderBottomColor:'#F8F8FF',
    alignItems:'center',
    paddingLeft: 15
  },
  backStyle:{
    height:40,
    width:40
  },
  avatarStyle:{
    height:50,
    width:50,
    borderRadius:25,
    marginLeft: 5
  },
  chatStyle:{
    fontSize:30,
    fontWeight:'bold',
    marginRight:width*0.4
  },
  bottomStyle:{
    flex:1,
    flexDirection:'row',
    borderTopWidth:4,
    borderTopColor:'#F8F8FF',
    alignItems:'center',
    paddingLeft: 15,
    paddingRight: 15,
    justifyContent:'space-between'
  },
  inputStyle:{
    backgroundColor:'#DCDCDC',
    height: '80%',
    width: '85%',
    borderRadius:30
  }
})
