import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Dimensions, FlatList,
  StyleSheet, ScrollView, AsyncStorage
} from 'react-native';
import icBack from '../../media/appIcon/backW.png';
import icLogo from '../../media/appIcon/logo.jpg';
const { height, width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
export default function (props) {
  const navigation = useNavigation();

  return <ProductView {...props} navigation={navigation} />;
}
class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listProduct: [],
      product: null,
      total:0
    }

  }
  /* componentWillMount(){
     var value =  AsyncStorage.getItem('product');
        value.then((e)=>{
          this.setState({
           product: e
          })
        })
       
        console.log(value);
    }*/
  componentDidMount() {

    this.getData();
  
    //  console.log(this.state.listProduct);



  }
  getData = async () => {
    //AsyncStorage.clear();
    var list = [];
    try {
      var a = await AsyncStorage.getItem('Toán 8');
      const keys = await AsyncStorage.getAllKeys()
      const items = await AsyncStorage.multiGet(keys);

      for (let i = 0; i < items.length; i++) {

        var array = items[i][1].split(",");
        var obj = {
          "name": array[0],
          "quantity": array[1],
          "price": array[2],
          "image": array[3]
        }
        list.push(obj);
        //console.log(array[0]);


      }
      //   console.log(keys);
      //  console.log(items);
      this.setState({ listProduct: list });
      this.TinhTien();
      console.log(this.state.listProduct);
    } catch (e) {
      console.log(e);
    }
    //return list;
  }
  TinhTien = async() => {
           var sum=0;
           for(let i=0;i<this.state.listProduct.length;i++)
           {
             sum+=parseInt(this.state.listProduct[i].price);
           }
           console.log(sum);
           this.setState({total:sum});
  }
  render() {
    const { navigation } = this.props;
    const { headerStyle, botStyle, iconStyle, buyStyle, touchableOpacityStyle, imageStyle
    } = styles;
    let listProducts = this.state.listProduct;
    return (
      <View style={{ flex: 1 }}>
        <View style={headerStyle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={icBack} style={iconStyle} />
          </TouchableOpacity>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#FFF' }}> DONG LAO SHOP </Text>
          <Image source={icLogo} style={iconStyle} />
        </View>
        <View style={{ flex: 10, backgroundColor: '#F8F8FF' }}>
          <FlatList
           horizontal={true}
            data={listProducts}
            renderItem={({ item }) =>
              <TouchableOpacity style={touchableOpacityStyle}
                onPress={() => navigation.navigate('ProductView', { product: item })}>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: "http://192.168.43.196:8080/image/" + item.image }} style={imageStyle} />
                  </View>
                  <View style={{ flex: 2, justifyContent: 'space-around', paddingTop: 3, paddingLeft: 10 }}>
                    <Text style={{ fontSize: 17 }}>{item.name} </Text>
                    <Text style={{ fontSize: 17 }}>{item.sell_price} </Text>
                    <Text style={{ fontSize: 17 }}>{item.quantity} </Text>
                  </View>
                </View>
              </TouchableOpacity>
            }
          />
        </View>

        <View style={botStyle}>
          <View style={{ flex: 2, flexDirection: 'row', alignItems: 'center', }}>
            <View>
          <Text>Tổng tiền :{this.state.total}</Text>
            </View>
          </View>
          <View style={buyStyle}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{ fontSize: 25, color: '#FFF' }}>Mua hàng</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    flex: 1,
    backgroundColor: '#607D8B',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderBottomColor: '#F8F8FF',
    borderBottomWidth: 2,
  },
  iconStyle: {
    height: 40,
    width: 40,
  },
  botStyle: {
    flex: 1,
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderWidth: 0.5,
    borderColor: '#607D8B'
  },
  buyStyle: {
    flex: 1,
    backgroundColor: '#607D8B',
    alignItems: 'center',
    justifyContent: 'center'
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
