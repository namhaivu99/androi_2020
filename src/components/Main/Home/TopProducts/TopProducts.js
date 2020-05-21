import React, { Component } from 'react';
import {
  Text, View, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView,
  FlatList
} from 'react-native';
import image from '../../../../media/appIcon/banner.jpg';
import { useNavigation } from '@react-navigation/native';
const { height, width } = Dimensions.get('window')
export default function (props) {
  const navigation = useNavigation();

  return <TopProducts {...props} navigation={navigation} />;
}
class TopProducts extends Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    this.state = [];
  //  this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
  /*  fetch('http://192.168.13.2:8080/all')
      .then((response) => response.json())
      .then((json) => {
      //  this.props.state = json;
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });*/

  }
  render() {
    const { navigation } = this.props;
    const { wrapper, imageStyle, textStyle, touchableOpacityStyle } = styles;
    return (
      <View style={wrapper}>
        <View style={{ flex: 1, justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={textStyle}>TOP PRODUCTS</Text>
          <TouchableOpacity style={{ justifyContent: 'space-around' }}>
            <Text style={{ color: '#9C9C9C' }}>xem thêm </Text>
          </TouchableOpacity>
        </View >
        <View style={{ flex: 6 }}>
          <FlatList horizontal={true}

            renderItem={({ item }) =>
              <TouchableOpacity style={touchableOpacityStyle}
                onPress={() => navigation.navigate('ProductView', item)}>
                <View style={{ flex: 1 }}>
                  <View style={{ flex: 5, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={image} style={imageStyle} />
                  </View>
                  <View style={{ flex: 2, justifyContent: 'space-around', paddingTop: 3, paddingLeft: 10 }}>
                    <Text style={{ fontSize: 17 }}>Tên sản phẩm </Text>
                    <Text style={{ fontSize: 17 }}>Đã bán </Text>
                  </View>
                </View>
              </TouchableOpacity>
            }
          />
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.37,
    backgroundColor: '#FFF',
    marginTop: 10,
    shadowColor: '#2E272B',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    padding: 15,
    paddingTop: 2,
    paddingBottom: 10
  },
  textStyle: {
    fontSize: 25,
    color: '#607D8B'
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
