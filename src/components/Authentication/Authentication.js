import React, { Component } from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity,
  TextInput
} from 'react-native';

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSignIn: true,
      password: "",
      username: "",
      email:""
    };
  }
  signIn() {
    var data = new FormData();
    data.append("username", this.state.username);
    data.append("password", this.state.password);
    console.log(this.state.username);
    console.log(this.state.password);
    this.setState({ isSignIn: true })
    fetch('http://192.168.43.196:8080/login',
      {
        method: 'POST',
        body: data
      })
      .then((response) => {
        console.log(response.headers);
       
       // console.log(json);
      })
      .catch((json) => {
        console.log("Login success!!!");
        console.log(json);
      });
      fetch('http://192.168.43.196:8080/get-username')
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });

  }
  signOut() {
    this.setState({ isSignIn: false })
  }
  checkPass(rePass){
          console.log(rePass);
  }
  createAccount()
  {
    
  }
  render() {
    const {
      row1, titleStyle, container, controlStyle,
      signInStyle, signUpStyle,
      inAcitveStyle, acitveStyle,
      inputStyle, bigButton, buttonText
    } = styles;

    const signInJSX = (
      <View>
        <TextInput style={inputStyle} placeholder="Enter your email"
          multiline={true}
          onChangeText={(username) => this.setState({ username })} />
        <TextInput style={inputStyle} placeholder="Enter your password" 
          secureTextEntry={true} multiline={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <TouchableOpacity style={bigButton} onPress={this.signIn}>
          <Text style={buttonText}> SIGN IN NOW </Text>
        </TouchableOpacity>
      </View>
    );
    const signUpJSX = (
      <View>
        <TextInput style={inputStyle} placeholder="Enter your name" />
        <TextInput style={inputStyle} placeholder="Enter your email"
          multiline={true}
          onChangeText={(username) => this.setState({ username })} />
        <TextInput style={inputStyle} placeholder="Enter your password" 
          secureTextEntry={true} multiline={true}
          onChangeText={(password) => this.setState({ password })}
        />
        <TextInput style={inputStyle} placeholder="Re-enter your password" secureTextEntry={true} 
         onChangeText={(password) => this.checkPass(password)}
        />
        <TouchableOpacity style={bigButton}>
          <Text style={buttonText} onPress={this.createAccount}> Create Account </Text>
        </TouchableOpacity>
      </View>
    );
    const mainJSX = this.state.isSignIn ? signInJSX : signUpJSX;


    return (
      <View style={container}>
        <View style={row1}>
          <Text style={titleStyle}> Đông Lào Shop </Text>
        </View>

        <View>
          {mainJSX}
        </View>

        <View style={controlStyle}>
          <TouchableOpacity style={signInStyle} onPress={this.signIn.bind(this)}>
            <Text style={this.state.isSignIn ? acitveStyle : inAcitveStyle}> SIGN IN </Text>
          </TouchableOpacity>
          <TouchableOpacity style={signUpStyle} onPress={this.signOut.bind(this)}>
            <Text style={!this.state.isSignIn ? acitveStyle : inAcitveStyle}> SIGN UP </Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#607D8B',
    padding: 15,
    justifyContent: 'space-between'
  },
  row1: { flexDirection: 'row', justifyContent: 'center' },
  titleStyle: { color: '#FFF', fontFamily: 'Avenir', fontSize: 40 },
  controlStyle: { flexDirection: 'row' },
  signInStyle: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
    alignItems: 'center',
    flex: 1,
    borderBottomLeftRadius: 30,
    borderTopLeftRadius: 30,
    marginRight: 2,
  },
  signUpStyle: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
    alignItems: 'center',
    flex: 1,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 30,
    marginLeft: 2,
  },
  inAcitveStyle: {
    color: '#D7D7D7',
    fontSize: 20
  },
  acitveStyle: {
    color: '#607D8B',
    fontSize: 20
  },
  inputStyle: {
    backgroundColor: '#FFF',
    height: 70,
    fontSize: 20,
    marginBottom: 10,
    borderRadius: 30,
    paddingLeft: 30,
  },
  bigButton: {
    height: 70,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: '#FFF',
    fontFamily: 'Avenir',
    fontSize: 20
  }
});
