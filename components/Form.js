import React from 'react';
import {TextInput, Text,  Image, StyleSheet, View, TouchableOpacity} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import styles from '../assets/styles/Styles';

class Form extends React.Component {

  onSignInButtonHandler = () => {

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
          />
          <Text style={styles.warningStyle} label='emailWarning'> Wrong email</Text>
          <Text style={styles.labelStyle}> Password </Text>
          <TextInput style={styles.inputStyle}
            name="password"
            component="input"
            type="text"
            placeholder="Input password"
          />
          <Text style={styles.warningStyle} label='passWarning' > Wrong password</Text>
          <TouchableOpacity onPress={this.onSignInButtonHandler}>
            <Text style={styles.buttonStyle}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

export default Form;
