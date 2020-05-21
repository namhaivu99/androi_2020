import React, { Component } from 'react';
import {
  View, Text, Image, TouchableOpacity, Dimensions, FlatList,
  StyleSheet, ScrollView, TextInput, Form, FormGroup, Label, Input, Button
} from 'react-native';
import icBack from '../../../media/appIcon/back.png';
import icOk from '../../../media/appIcon/ok.png';
const { height, width } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
import { ActionSheet, Root } from 'native-base';
import ImagePicker from 'react-native-image-crop-picker';
//const width = Dimensions.get('window').width;
export default function (props) {
  const navigation = useNavigation();

  return <AddProduct {...props} navigation={navigation} />;
}
class AddProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileList: []
    }
  }
  onSelectImage = (image) => {
    let newDataImg = this.state.fileList;
    const source = { uri: image.path };
    let item = {
      id: Date.now(),
      url: source,
      content: image.data
    }
    newDataImg.push(item);
    this.setState({ fileList: newDataImg })
  }
  takePhotoFromCamera = () => {
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      this.onSelectImage(image);
      console.log("================================================================");
      console.log(image);
    });
  }
  chosePhotoFromLibrary = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      this.onSelectImage(image);
      console.log(image);

      console.log(this.state.fileList.length);
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
  render() {
    const { navigation } = this.props;
    const { headerStyle, addImageStyle, nameStyle, descriptionStyle } = styles;
    let { content, btnPressStyle, txtStyle } = styles;
    let { fileList } = this.state;
    return (
      /* <View style ={{flex:1}}>
         <View style = {headerStyle}>
           <TouchableOpacity  onPress={() => navigation.goBack()}>
             <Image source={icBack} style ={{height:20,width:40}}/>
           </TouchableOpacity>
           <Text style ={{fontSize:20}}>Them san pham </Text>
           <TouchableOpacity>
             <Image source={icOk} style ={{height:60,width:60}}/>
           </TouchableOpacity>
         </View>
         <View style ={addImageStyle}>
         </View>
         <View style= {nameStyle}>
           <TextInput style ={{fontSize:20,paddingLeft:10}} placeholder ='ten san pham'/>
         </View>
         <View style= {descriptionStyle}>
           <TextInput multiline= {true} style ={{fontSize:20,paddingLeft:10}} placeholder ='mo ta san pham'/>
         </View>
         <View style= {nameStyle}>
           <TouchableOpacity>
             <Text style ={{fontSize:20}}>danh muc</Text>
           </TouchableOpacity>
         </View>
         <View style= {nameStyle}>
           <TouchableOpacity>
             <Text style ={{fontSize:20}}>thuong hieu</Text>
           </TouchableOpacity>
         </View>
         <View style= {nameStyle}>
           <TouchableOpacity>
             <Text style ={{fontSize:20}}>xuat su</Text>
           </TouchableOpacity>
         </View>
         <View style= {nameStyle}>
           <TouchableOpacity>
             <Text style ={{fontSize:20}}>gia</Text>
           </TouchableOpacity>
         </View>
         <View style= {nameStyle}>
           <TouchableOpacity>
             <Text style ={{fontSize:20}}>kho</Text>
           </TouchableOpacity>
         </View>
         <View style= {nameStyle}>
           <TouchableOpacity>
             <Text style ={{fontSize:20}}>phan loai</Text>
           </TouchableOpacity>
         </View>
         <View style= {nameStyle}>
           <TouchableOpacity>
             <Text style ={{fontSize:20}}>can nang</Text>
           </TouchableOpacity>
         </View>
         <View style= {nameStyle}>
           <TouchableOpacity>
             <Text style ={{fontSize:20}}>tinh trang</Text>
           </TouchableOpacity>
         </View>
         <View style= {nameStyle}>
           <TouchableOpacity>
             <Text style ={{fontSize:20}}>phi van chuyen</Text>
           </TouchableOpacity>
         </View>
       </View>*/
      <View>
        <View>
          <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              <Label for="content">Content</Label>
              <Input type="text" name="content" id="content"
                autoComplete="content" />
            </FormGroup>


          </Form>
        </View>

        <Root>

          <View style={content}>
            <Text>Sample react native add IMG</Text>
            <FlatList
              data={fileList}
              renderItem={this.renderItem}
              keyExtractor={(item, index) => index.toString()}
              extraData={this.state}
            ></FlatList>
            <TouchableOpacity onPress={this.onClickAddImage} style={btnPressStyle}>
              <Text style={txtStyle}>Press Add IMG</Text>
            </TouchableOpacity>

          </View>
        </Root>
      </View>
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
