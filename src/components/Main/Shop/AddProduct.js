import React, { Component, PropTypes } from 'react';
import {
  View, Text, Image, TouchableOpacity, Dimensions, FlatList,
  StyleSheet, ScrollView, TextInput, Form, FormGroup, Label, Input, Button
} from 'react-native';
import icBack from '../../../media/appIcon/back.png';
import icOk from '../../../media/appIcon/ok.png';
const { height, width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { ActionSheet, Root } from 'native-base';
import ImagePicker from 'react-native-image-picker';
import { fetch as fetchPolyfill } from 'whatwg-fetch'
import RNFetchBlob from 'react-native-fetch-blob'
import { Select, Option } from "react-native-chooser";
import { ListItem } from 'native-base';


//const width = Dimensions.get('window').width;
export default function (props) {
  const navigation = useNavigation();

  return <AddProduct {...props} navigation={navigation} />;
}
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: [],
      listImage: [],
      name: '',
      description: '',
      sell_price: 0,
      quantity_in_stock: 0,
      path: '',
      list_categories: null,
      categories_id: 0,

    }
  }
  done(){
    console.log("dasssssssasdsadsad");
  }
  componentDidMount() {
    fetch('http://192.168.43.196:8080/categories')
      .then((response) => response.json())
      .then((json) => {
        this.setState({
          list_categories: json
        })
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
  }
  onSelectImage = (image) => {
    let newDataImg = this.state.fileList;
    let listIMG = this.state.listImage;
    const source = { uri: image.uri };
    let item = {
      id: Date.now(),
      url: source,
      content: image.data
    }
    let photo = {
      data: image.data,
      fileName: image.fileName,
      uri: image.uri
    }


    newDataImg.push(item);
    listIMG.push(photo);
    this.setState({ fileList: newDataImg })
    this.setState({ listImage: listIMG })
  }
  takePhotoFromCamera = () => {
    ImagePicker.launchCamera({ mediaType: 'photo', allowsEditing: true, quality: 0.7 }, (response) => {
      console.log(response);
    });

  }

  chosePhotoFromLibrary = async () => {
    ImagePicker.showImagePicker({ mediaType: 'photo', allowsEditing: true, quality: 0.7 }, (response) => {
      // console.log(response);
      this.onSelectImage(response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {

      }


    });
  }
  upLoadImage = async () => {

    var formData = new FormData();
    // data.append("image", this.state.listImage);
    formData.append("name", this.state.name);
    formData.append("sell_price", this.state.sell_price);
    formData.append("description", this.state.description);
    formData.append("image", {
      name: this.state.listImage[0].fileName,
      type: 'image/jpg',
      uri: this.state.listImage[0].uri

    });
    var data = [];
    data.push({
      name: "name",
      data: String(this.state.name)
    });
    data.push({
      name: "sell_price",
      data: String(this.state.sell_price)
    });
    data.push({
      name: "description",
      data: String(this.state.description)
    });
    for (let i = 0; i < this.state.listImage.length; i++) {
      data.push({
        name: 'image',

        filename: this.state.listImage[i].fileName,
        // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
        // Or simply wrap the file path with RNFetchBlob.wrap().
        data: this.state.listImage[i].data
      })
    }
    console.log(data.length);


    RNFetchBlob.fetch('POST', 'http://192.168.43.196:8080/product/action/creat', {

      otherHeader: "foo",
      // this is required, otherwise it won't be process as a multipart/form-data request
      'Content-Type': 'multipart/form-data',
    }, data/* [
    // append field data from file path
    {
      name : 'image',
      filename : this.state.listImage[0].fileName,
      // Change BASE64 encoded data to a file path with prefix `RNFetchBlob-file://`.
      // Or simply wrap the file path with RNFetchBlob.wrap().
      data: this.state.listImage[0].data
    }
    
    // elements without property `filename` will be sent as plain text
    
    
  ]*/
    ).then((resp) => {
      // ...
    }).catch((err) => {
      // ...
    })

  }
  handelChoosePhoto = () => {
    const options = {
      title: 'Select Avatar',
      customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      let photo = {
        type: 'image/jpg',
        name: response.fileName,
        uri: response.path,

      }
      this.setState({ listImage: photo });
      console.log(photo);
      this.setState({ path: response.path })
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };


      }
    });
  }

  onClickAddImage = () => {
    const BUTTONS = ['Take Photo', 'Choose Photo Library', 'Cancle'];
    ActionSheet.show({ options: BUTTONS, cancelButtonIndex: 2, title: 'Select a Photo' },
      buttonIndex => {
        switch (buttonIndex) {
          case 0:
            this.takePhotoFromCamera();
            break;
          case 1:
            this.chosePhotoFromLibrary();
            break;
          default:
            break;
        }
      }
    )
  }
  handleSubmit(event) {
    console.log(event);

  }
  renderItem = ({ item, index }) => {
    return (
      <View>
        <Image source={item.url} style={styles.itemImage}></Image>
      </View>
    )

  };
  renderOption = () => {
    for (let i = 0; i < this.state.list_categories.length; i++) {
      return (
        <Option value={this.state.list_categories[i].name}>{this.state.list_categories[i].name}</Option>
      )
    }
  }

  saveProduct = () => {

    var data = new FormData();
    // data.append("image", this.state.listImage);
    data.append("name", this.state.name);
    data.append("sell_price", this.state.sell_price);
    data.append("description", this.state.description);
    data.append('image', this.state.listImage);
    console.log(this.state);

    fetch('http://192.168.11.104:8080/product/action/creat', {
      method: 'post',
      /* headers: {
          Accept: 'application/json',
         // 'Content-Type': 'multipart/form-data'
        },*/
      body: data
    });

  }


  onSelect(value, label) {
    this.setState({ categories_id: value });
  }
  render() {
    const { navigation } = this.props;
    const { headerStyle, addImageStyle, nameStyle, descriptionStyle } = styles;
    let { content, btnPressStyle, txtStyle } = styles;
    let { fileList } = this.state;
    let { list_categories } = this.state;
    return (




      <Root>

        <View style={content}>
          <Text>Sample react native add IMG</Text>
          <FlatList
            data={fileList}
            renderItem={this.renderItem}
            keyExtractor={(item, index) => index.toString()}
            extraData={this.state}
          ></FlatList>
          <TouchableOpacity onPress={this.chosePhotoFromLibrary} style={btnPressStyle}>
            <Text style={txtStyle}>Press Add IMG</Text>
          </TouchableOpacity>

        </View>

        <View>
          <View>

          </View>
          <View style={descriptionStyle}>
           
          </View>
          <View style={descriptionStyle}>
            <TextInput multiline={true}
              onChangeText={(name) => this.setState({ name })}
              style={{ fontSize: 20, paddingLeft: 10 }} placeholder='Tên sản phẩm' />
          </View>
          <View style={descriptionStyle}>
            <TextInput multiline={true}
              onChangeText={(description) => this.setState({ description })}
              style={{ fontSize: 20, paddingLeft: 10 }} placeholder="Mô tả sản phẩm" />
          </View>
          <View style={descriptionStyle}>
            <TextInput multiline={true}
              onSubmitEditing={this.done}
              onChangeText={(sell_price) => this.setState({ sell_price })}
              style={{ fontSize: 20, paddingLeft: 10 }} placeholder='Giá' />
          </View>
          <View style={descriptionStyle}>
            <TextInput multiline={true}
              onChangeText={(quantity_in_stock) => this.setState({ quantity_in_stock })}
              style={{ fontSize: 20, paddingLeft: 10 }} placeholder='Số lượng' />
          </View>
        </View>
        <TouchableOpacity style={btnPressStyle} onPress={this.upLoadImage}>
          <Text style={txtStyle}>Lưu</Text>
        </TouchableOpacity>
      </Root>

    )
  }
}
const styles = StyleSheet.create({
  headerStyle: {
    height: height * 0.08,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    padding: 10
  },
  addImageStyle: {
    height: height * 0.16,
    backgroundColor: '#FFF',
    marginTop: 2
  },
  nameStyle: {
    height: height * 0.06,
    backgroundColor: '#FFF',
    marginTop: 2
  },
  descriptionStyle: {
    height: height * 0.1,
    backgroundColor: '#FFF',
    marginTop: 2
  },
  content: {
    flex: 1,
    alignItems: 'center',
    marginTop: 50,
    paddingLeft: 30,
    paddingRight: 30,
    marginBottom: 30
  },
  btnPressStyle: {
    backgroundColor: '#0080ff',
    height: 50,
    width: width - 60,
    alignItems: "center",
    justifyContent: 'center'

  },
  txtStyle: {
    color: '#ffffff'
  },
  itemImage: {
    backgroundColor: '#2F455C',
    height: 50,
    width: width - 60,
    borderRadius: 8,
    resizeMode: 'contain'
  }
})
