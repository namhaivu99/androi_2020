import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Dimensions, TextInput,
  StyleSheet
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import icSearch from '../../media/appIcon/cart1.png';
import icChat from '../../media/appIcon/chat.png';
import { FlatList } from 'react-native-gesture-handler';
import { ListItem } from 'native-base';
import { Drawer } from 'react-native-drawer';
import { SearchBar } from 'react-native-elements';
import TopProducts from './Home/TopProducts/TopProducts';
import Menu from './Menu';
//import { Container, Header, Content, List, ListItem, Text, Left, Right, Icon } from 'native-base';
const { height } = Dimensions.get('window');
export default function (props) {
  const navigation = useNavigation();

  return <Header {...props} navigation={navigation} />;
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      temp: [],
      error: null,
      searchTxt: null,
      navi: this.props.navigation
    }
  }
  onSubmitEdit = () => {
    // const { navigation } = useNavigation();
    //  this.state.navi.navigate('ListProductView', { name: this.state.searchTxt});

    console.log(this.state.searchTxt);
    this.props.navigation.navigate('ListProductView', { name: this.state.searchTxt });
  }
  renderHeader = () => {
    return (
    <View>
       
      <SearchBar placeholder="Search Here..."
        lightTheme round editable={true}
        value={this.state.searchTxt}
        onSubmitEditing={this.onSubmitEdit}
        onChangeText={(searchTxt) => this.updateSearch(searchTxt)} />

    </View>
    )
      ;
  };

  updateSearch(search) {

    this.setState({ searchTxt: search })
    var data = new FormData();
    // data.append("image", this.state.listImage);
    data.append("name", search);

    fetch('http://192.168.43.196:8080/products/name-list',
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
        this.setState({ data: responseJson })
      })
      .catch((error) => {
        console.error(error);
      });

  };
  closeControlPanel = () => {
    this.drawer.close()
  };
  openControlPanel = () => {
    this.drawer.open()
  };
  render() {
    const { navigation } = this.props;
    return (
      this.state.error != null ?
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Text>{this.state.error}</Text>
          <Button onPress={
            () => {
              this.getData();
            }
          } title="Reload" />
        </View> :
        <FlatList
          
          ListHeaderComponent = { this.renderHeader }

    data = { this.state.data }
    keyExtractor = { item => item.email }

    renderItem = {({ item }) =>
    <TouchableOpacity
      onPress={() => navigation.navigate('ListProductView', { name: item })}>
      <View style={{ flex: 1 }}>
        <ListItem
          roundAvatar
          title={item}

        />

        <View style={{ flex: 2, justifyContent: 'space-around', paddingTop: 3, paddingLeft: 10 }}>
          <Text style={{ fontSize: 17 }}>{item} </Text>

        </View>
      </View>
    </TouchableOpacity>
  }
        />
    );
  }
}
const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.07,
    backgroundColor: '#607D8B',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomColor: '#F8F8FF',
    borderBottomWidth: 2,
  },
  logo: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',

  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flex: 1
  },
  cartStyle: {
    marginRight: 15,
    height: 45,
    width: 45,
  },
  chatStyle: {
    marginRight: 5,
    marginTop: 9,
    height: 30,
    width: 30,
  },
  searchStyle: {
    borderRadius: 30,
    backgroundColor: '#FFF',
    width: '90%',
    height: '85%',
    justifyContent: 'center',
    paddingLeft: 15,
    paddingBottom: 3
  }
});
