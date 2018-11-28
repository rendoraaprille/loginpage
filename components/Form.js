import React from 'react';
import {TextInput, Text,  Image, StyleSheet, View, TouchableOpacity, Alert} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from '../assets/styles/Styles';

class Form extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  onSignin = () => {
    this.validate();
  }

  handleUserInput = ()=>{
    // SHOULD empty warning field which generates the action
    // FOR NOW empty both warnings
    this.emptyWarning();
    this.validate();
  }

  emptyWarning = ()=> {
    this._email.setNativeProps( { text: '' }) ;
    this._password.setNativeProps( { text: '' }) ;
  }

  validate = () => {
    let email = this.state.email;
    let password = this.state.password;

    //check if valid email
    isEmailValid = email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
    //check if valid password length
    isPasswordValid = (password.length>=6 && password.length<=12);
    //check if email field is empty
    let isEmailEmpty = (email.length == 0);
    //check if password is empty
    let isPasswordEmpty = (password.length == 0);

    if ( isEmailEmpty && !isPasswordEmpty ){ //email purposely left empty
      this._email.setNativeProps( { text: 'Email address is empty' });
    } if (!isEmailValid && !isEmailEmpty){ //invalid email syntax
      this._email.setNativeProps( { text: 'Invalid email address' } );
    } if(!isPasswordValid && !isPasswordEmpty ){ //invalid password syntax
      this._password.setNativeProps( { text: 'Password must be 6-12 characters' } );
    } if(isPasswordValid) {
      this._password.setNativeProps( { text: '' } );
    }
  }
  render(){
    return (
      <KeyboardAwareScrollView style={{ backgroundColor: '#faf8fe' }}
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={true}>
        <View styles={styles.container}>
          <Image source={require('../assets/Logo.png')} style={styles.logo}/>
          <Text style={styles.labelStyle}> Email </Text>
          <TextInput style={styles.inputStyle}
            name="email"
            component="input"
            type="text"
            placeholder="Input email address"
            value={this.state.email}
            // onChange={this.onInputChange.bind(this)}
            onChangeText={(email) => this.setState({email})}
            onBlur={this.handleUserInput.bind(this)}
            // onChange={(event) => this.handleUserInput(event)}
          />
          <TextInput style={styles.warningStyle} editable={false} ref={component => this._email = component}/>
          <Text style={styles.labelStyle}> Password </Text>
          <TextInput style={styles.inputStyle}
            name="password"
            component="input"
            type="text"
            placeholder="Input password"
            secureTextEntry={true}
            value={this.state.password}
            onBlur={this.handleUserInput.bind(this)}
            onChangeText={(password) => this.setState({password})}
          />

          <TextInput style={styles.warningStyle} editable={false} ref={component => this._password = component}/>

          <TouchableOpacity onPress={this.onSignin}>
            <Text style={styles.buttonStyle}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Form;
