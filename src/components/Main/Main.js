import React, {Component} from 'react';
import { Text, View,Image } from 'react-native';
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

function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile!</Text>
    </View>
  );
}

function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#607D8B',
        labelStyle: {
            fontSize: 15,
          },
        style:{
          height:65
        }
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon : ({focused}) => {
                return  <Image source={focused ? icHome:icHome0} style={{height:40, width:40}}/>

            }
        }}
      />
      <Tab.Screen
        name="Shop"
        component={Shop}
        options={{
          tabBarLabel: 'Shop',
          tabBarIcon : ({focused, tintColor}) => {
                return  <Image source={focused ? icCart:icCart0} style={{height:30, width:30}} color={tintColor}/>
            }
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Profile}
        options={{
          tabBarLabel: 'Notification',
          tabBarIcon : ({focused, tintColor}) => {
                return  <Image source={focused ? icMail:icMail0} style={{height:25, width:25}} color={tintColor}/>
            }
        }}
      />
      <Tab.Screen
        name="Account"
        component={Authentication}
        options={{
          tabBarLabel: 'Account',
          tabBarIcon : ({focused, tintColor}) => {
                return  <Image source={focused ? icAccount:icAccount0} style={{height:25, width:25}} color={tintColor}/>
            }
        }}
      />
    </Tab.Navigator>
  );
}

export default class Main extends Component {
  render(){
    return (
        <MyTabs />
    );
  }
}
