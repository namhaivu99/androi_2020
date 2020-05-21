import React, {Component} from 'react';
import {
  View,Text,StyleSheet,TouchableOpacity,
  TextInput
} from 'react-native';

export default class Authentication extends Component {
  constructor(props){
    super(props);
    this.state = {isSignIn: true};
  }
  signIn(){
    this.setState({isSignIn: true})
  }
  signOut(){
    this.setState({isSignIn: false})
  }
  render(){
    const {
      row1,titleStyle,container,controlStyle,
      signInStyle,signUpStyle,
      inAcitveStyle,acitveStyle,
      inputStyle,bigButton,buttonText
    } = styles;

    const signInJSX= (
      <View>
        <TextInput style={inputStyle} placeholder ="Enter your email" />
        <TextInput style={inputStyle} placeholder ="Enter your password"  secureTextEntry={true}/>
        <TouchableOpacity style = {bigButton}>
          <Text style = {buttonText}> SIGN IN NOW </Text>
        </TouchableOpacity>
      </View>
    );
    const signUpJSX =(
      <View>
        <TextInput style={inputStyle} placeholder ="Enter your name" />
        <TextInput style={inputStyle} placeholder ="Enter your email" />
        <TextInput style={inputStyle} placeholder ="Enter your password" secureTextEntry={true}/>
        <TextInput style={inputStyle} placeholder ="Re-enter your password" secureTextEntry={true}/>
        <TouchableOpacity style = {bigButton}>
          <Text style = {buttonText}> SIGN UP NOW </Text>
        </TouchableOpacity>
      </View>
    );
    const mainJSX = this.state.isSignIn ? signInJSX : signUpJSX;


    return (
    <View style = {container}>
        <View style = {row1}>
          <Text style = {titleStyle}> Đông Lào Shop </Text>
        </View>

        <View>
          {mainJSX}
        </View>

        <View style = {controlStyle}>
          <TouchableOpacity style = {signInStyle} onPress = {this.signIn.bind(this)}>
            <Text style = {this.state.isSignIn ? acitveStyle:inAcitveStyle}> SIGN IN </Text>
          </TouchableOpacity>
          <TouchableOpacity style = {signUpStyle} onPress = {this.signOut.bind(this)}>
          <Text style ={!this.state.isSignIn ? acitveStyle:inAcitveStyle}> SIGN UP </Text>
          </TouchableOpacity>
        </View>
    </View>
    )
  }
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#607D8B',
    padding: 15,
    justifyContent: 'space-between'
  },
  row1: {flexDirection: 'row', justifyContent: 'center'},
  titleStyle: {color:'#FFF', fontFamily:'Avenir', fontSize: 40},
  controlStyle:{flexDirection:'row'},
  signInStyle:{
    backgroundColor: '#FFF',
    paddingVertical: 20,
    alignItems:'center',
    flex: 1,
    borderBottomLeftRadius:30,
    borderTopLeftRadius:30,
    marginRight:2,
  },
  signUpStyle:{
    backgroundColor: '#FFF',
    paddingVertical: 20,
    alignItems:'center',
    flex: 1,
    borderBottomRightRadius:30,
    borderTopRightRadius:30,
    marginLeft:2,
  },
  inAcitveStyle:{
    color:'#D7D7D7',
    fontSize: 20
  },
  acitveStyle:{
    color:'#607D8B',
    fontSize: 20
  },
  inputStyle:{
    backgroundColor:'#FFF',
    height:70,
    fontSize:20,
    marginBottom: 10,
    borderRadius: 30,
    paddingLeft: 30,
  },
  bigButton:{
    height: 70,
    borderRadius: 30,
    borderWidth: 1 ,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems:'center'
  },
  buttonText:{
    color:'#FFF',
    fontFamily:'Avenir',
    fontSize:20
  }
});
