import React, {Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Main from './components/Main/Main';
import Message from './components/Message/Message'
import ChatView from './components/Message/ChatView'
import Search from './components/Search/Search'
import ProductView from './components/ProductView/ProductView'
import Cart from './components/Cart/Cart'
import AddProduct from './components/Main/Shop/AddProduct'
const Stack = createStackNavigator();
export default class App extends Component {
  render(){
    return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} options={{ headerShown:false}}/>
        <Stack.Screen name="Message" component={Message} options={{ headerShown:false}} />
        <Stack.Screen name="ChatView" component={ChatView} options={{ headerShown:false}}/>
        <Stack.Screen name="Search" component={Search} options={{ headerShown:false}}/>
        <Stack.Screen name="ProductView" component={ProductView} options={{ headerShown:false}}/>
        <Stack.Screen name="Cart" component={Cart} options={{ headerShown:false}}/>
        <Stack.Screen name="AddProduct" component={AddProduct} options={{ headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
  }
}
