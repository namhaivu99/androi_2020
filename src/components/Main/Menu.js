import React, {Component} from 'react';
import { Text, View,Image, AsyncStorage } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import icHome from '../../media/appIcon/home.png';
import icHome0 from '../../media/appIcon/home0.png';
import icCart from '../../media/appIcon/shop.png';
import icCart0 from '../../media/appIcon/shop0.png';
import icMail from '../../media/appIcon/mail.png';
import icMail0 from '../../media/appIcon/mail0.png';
import icAccount from '../../media/appIcon/user.png';
import icAccount0 from '../../media/appIcon/user0.png';
import Authentication from '../Authentication/Authentication';
import Shop from './Shop/Shop'
import Home from './Home/Home'
import Cart from '../Cart/Cart'




export default class Menu extends Component {
  constructor(props)
  {
    super(props);
    this.state = {
          list_product:[]
    }

  }
 
  render(){
    return (
        <View style={{ flex:1,backgroundColor:'#213052'}}>
            <Text>Component Menu</Text>
        </View>
    );
  }
}

