import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Dimensions, FlatList,
  StyleSheet, ScrollView, TextInput, TouchableHighlight, AsyncStorage
} from 'react-native';

import Colors from '../theme/Colors'
import Metrics from '../theme/Metrics'
import icChat from '../../media/appIcon/chat1.png';
import icCart from '../../media/appIcon/cart.png';
import icBack from '../../media/appIcon/backW.png';
import icLogo from '../../media/appIcon/logo.jpg';
const { height, width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Name, FlexRowCenter, WhiteSpace, Container, Price } from './Common'
export default function (props) {
  const navigation = useNavigation();
  const route = useRoute();
  return <ProductView {...props} navigation={navigation} route={route} />;
}
class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.route.params.product,
      quantity: 1
    }
  }
  componentDidMount() {
    //this.poroductDetail(this.props.route.params.product);
   // console.log(this.state.product);
    // console.log(this.props.route.params.product);
  }
  poroductDetail = async (productDetail) => {
    this.setState({
      product: productDetail
    })
  }
  handleAddCart = () => {  
   // this.clearAsyncStorage();
    var name = this.state.product.name;
    var value = "";
    value += this.state.product.name + ",";
    value += this.state.quantity + ",";
    value += this.state.quantity * parseInt(this.state.product.sell_price)+","; 
    value += this.state.product.image;
    /*AsyncStorage.setItem(
      'name',
      'I like to save it.'
    );*/
   
    
    AsyncStorage.setItem(
      name,
      value/*,
      () => {
        
            AsyncStorage.getItem(name, (err, result) => {
              console.log(result);
            });
          
        
      }*/
    );
    var array=[];
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        stores.map((result, i, store) => {
          // get at each store's key/value so you can work with it
         // console.log(result);
          let key = store[i][0];
          let value = store[i][1];
        array.push(value);
        });
      });
    });
    console.log(array);
    
  }
  clearAsyncStorage = async() => {
    AsyncStorage.clear();
}
  _increment = () => {
    const result = parseInt(this.state.quantity) + 1
    this.setState({
      quantity: result.toString()
    })
  }

  _decrement = () => {
    const result = parseInt(this.state.quantity) - 1
    this.setState({
      quantity: result.toString()
    })
  }
  render() {
    const { navigation, route } = this.props;
    const { headerStyle, botStyle, iconStyle, chatStyle, cartStyle, buyStyle, imageStyle, container
    } = styles;
    /*return(
      <View style={{flex:1}}>
        <View style ={headerStyle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icBack} style={iconStyle} />
          </TouchableOpacity>
          <Text style ={{fontSize:30,fontWeight:'bold',color:'#FFF'}}> DONG LAO SHOP </Text>
          <Image source={icLogo} style={iconStyle}/>
        </View>
        <View style ={{flex:10}}>
          <ScrollView>
         
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source ={{uri: "http://192.168.43.196:8080/image/"+this.state.product.image}} style={imageStyle} />
                  </View>
                 
                </View>
              
            <View style={{height:height*0.08,backgroundColor:'#FFF',marginTop:3}}>
              <Text style ={{fontSize:20}}>{this.state.product.name} </Text>
            </View>
            <View style={{height:height*0.08,backgroundColor:'#FFF',marginTop:3}}>
              <Text style ={{fontSize:20}}>{this.state.product.sell_price} VNĐ </Text>
            </View>
            <View style={{height:height*0.08,backgroundColor:'#FFF',marginTop:3}}>
              <Text style ={{fontSize:20}}>phi van chuyen </Text>
            </View>
            <View style ={{height:height*0.2,backgroundColor:'#FFF',marginTop:3}}>
              <Text>chu shop </Text>
            </View>
            <View style={{height:height*0.08,backgroundColor:'#FFF',marginTop:3}}>
              <Text style ={{fontSize:20}}>thông tin san pham </Text>
            </View>
            <View style={{height:height*0.08,backgroundColor:'#FFF',marginTop:3}}>
              <Text style ={{fontSize:20}}>thông tin san pham </Text>
            </View>
          </ScrollView>
        </View>

        <View style ={botStyle}>
          <View style ={{flex:1,flexDirection:'row',alignItems:'center',}}>
            <View style ={chatStyle}>
              <TouchableOpacity onPress={() => navigation.navigate('ChatView')} >
                <Image source={icChat} style ={iconStyle}/>
              </TouchableOpacity>
            </View>
            <View style ={cartStyle}>
              <TouchableOpacity>
                <Image source={icCart} style ={{  height:50,width:50,}}/>
              </TouchableOpacity>
            </View>
          </View>
          <View style ={buyStyle}>
            <TouchableOpacity>
              <Text style={{fontSize:25,color:'#FFF'}}>Mua ngay </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )*/
    return (
      <ScrollView contentContainerStyle={container}>

        <Name>{this.state.product.name}</Name>
        <WhiteSpace />
        <Image style={{ marginTop: 6, marginBottom: 6, width: 150, height: 150 }} source={{ uri: "http://192.168.43.196:8080/image/" + this.state.product.image }} />
        <WhiteSpace />

        <FlexRowCenter>
          <TouchableOpacity size={22} onPress={this._decrement} ></TouchableOpacity>
          <TextInput multiline={true}
            onChangeText={(quantity) => this.setState({ quantity })}
            style={{ fontSize: 20, paddingLeft: 10 }} placeholder="số lượng" />
          <TouchableOpacity size={22} onPress={this._increment} ></TouchableOpacity>
        </FlexRowCenter>

        <WhiteSpace />

        <FlexRowCenter>
          <TouchableHighlight style={{ margin: 10, padding: 15, backgroundColor: Colors.facebook }} onPress={this.handleAddCart}>
            <Text style={{ fontSize: 16, color: 'white' }} >Add Cart</Text>
          </TouchableHighlight>
        </FlexRowCenter>

        <WhiteSpace />
        <Price>${this.state.product.sell_price}</Price>
        <WhiteSpace />
        <Text style={{ width: Metrics.screenWidth - 50, lineHeight: 30 }}>Information</Text>

      </ScrollView>
    )
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    backgroundColor: '#607D8B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  iconStyle: {
    height: 40,
    width: 40,
  },
  botStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'row',
  },
  chatStyle: {
    flex: 1,
    borderRightWidth: 1,
    borderRightColor: '#696969',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  cartStyle: {
    flex: 1,
    borderLeftWidth: 1,
    borderLeftColor: '#696969',
    height: '80%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buyStyle: {
    flex: 1,
    backgroundColor: '#607D8B',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  imageStyle: {
    height: height * 0.18,
    width: width * 0.3,
  },
  container: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
