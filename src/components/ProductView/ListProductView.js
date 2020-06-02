import React, {Component} from 'react';
import {
  View,Text,Image,TouchableOpacity,Dimensions,FlatList,
  StyleSheet,ScrollView
} from 'react-native';
import icChat from '../../media/appIcon/chat1.png';
import icCart from '../../media/appIcon/cart.png';
import icBack from '../../media/appIcon/backW.png';
import icLogo from '../../media/appIcon/logo.jpg';
const {height,width} = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
export default function(props) {
  const navigation = useNavigation();
  const route = useRoute();
  return <ListProductView {...props} navigation={navigation} route={route} />;
}
class ListProductView extends Component{
    constructor(props) {
        super(props);
        this.state = {
          product_name:"",
          listProducts: [],
         
        }
      }
      componentDidMount(){
      //  const { navigation } = this.props;
       
        console.log( this.props.route.params.name);
        this.findListProductByName(this.props.route.params.name);
      }
      findListProductByName(name)
      {
        var data = new FormData();
        // data.append("image", this.state.listImage);
        data.append("name", name);
    
        fetch('http://192.168.43.196:8080/products/find_by_name',
          {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'multipart/form-data'
            },
            body: data
          })
          .then((response) => response.json())
          .then((responseJson) => {
            console.log('response object:', responseJson)
            this.setState({ listProducts: responseJson })
          })
          .catch((error) => {
            console.error(error);
          });
      }
  render(){
    const { navigation,route } = this.props;
    const {headerStyle,botStyle,iconStyle,chatStyle,cartStyle,buyStyle,touchableOpacityStyle,imageStyle
    }= styles;
    let listProducts=this.state.listProducts;
    return(
      <View style={{flex:1}}>
          <View>
              <Text>
                  ListProductView
              </Text>
          </View>
        <FlatList horizontal={true}
            data={listProducts}
            renderItem={({ item }) =>
              <TouchableOpacity style={touchableOpacityStyle}
                onPress={() => navigation.navigate('ProductView', {product:item})}>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source ={{uri: "http://192.168.43.196:8080/image/"+item.image}} style={imageStyle} />
                  </View>
                  <View style={{ flex: 2, justifyContent: 'space-around', paddingTop: 3, paddingLeft: 10 }}>
                    <Text style={{ fontSize: 17 }}>{item.name} </Text>
                    <Text style={{ fontSize: 17 }}>{item.sell_price} </Text>
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
    flex:1,
    backgroundColor:'#607D8B',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-around'
  },
  iconStyle:{
    height:40,
    width:40,
  },
  botStyle:{
    flex:1,
    backgroundColor:'#FFF',
    flexDirection:'row',
  },
  chatStyle:{
    flex:1,
    borderRightWidth:1,
    borderRightColor:'#696969',
    height:'80%',
    alignItems:'center',
    justifyContent:'center'
  },
  cartStyle:{
    flex:1,
    borderLeftWidth:1,
    borderLeftColor:'#696969',
    height:'80%',
    alignItems:'center',
    justifyContent:'center'
  },
  buyStyle:{
    flex:1,
    backgroundColor:'#607D8B',
    alignItems:'center',
    justifyContent:'space-around'
  },
  touchableOpacityStyle: {
    height: height * 0.3,
    width: width * 0.38,
    backgroundColor: '#FFF',
    marginRight: 10,
    borderColor: '#E8E8E8',
    borderWidth: 1,
  },
  imageStyle: {
    height: height * 0.18,
    width: width * 0.3,
  }
})
