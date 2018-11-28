import { StyleSheet, Dimensions } from 'react-native';

const window = Dimensions.get('window');

export const IMAGE_HEIGHT = window.width / 2;
export const IMAGE_HEIGHT_SMALL = window.width /7;


export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#faf8fe',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // purple #7361b2
  logoStyle: {
    marginTop: 70,
    marginBottom: 70,
    marginLeft: 5,
    marginRight: 5,
    height: IMAGE_HEIGHT,
    resizeMode: 'contain'
  },
  inputStyle: {
    backgroundColor: 'white',
    height: 45,
    paddingStart: 5,
    borderWidth: 1,
    borderColor: 'mediumpurple',
    borderRadius: 3,
    marginTop: 2,
    fontSize: 16
  },

  labelStyle: {
    fontWeight: 'bold'
  },

  warningStyle: {
    fontSize: 12,
    color: 'red',
    fontStyle: 'italic',
    marginBottom: 5,
    height: 15
  },

  buttonStyle: {
     backgroundColor: 'mediumpurple',
     borderColor: 'white',
     borderWidth: 1,
     borderRadius: 5,
     color: 'white',
     fontSize: 18,
     fontWeight: 'bold',
     overflow: 'hidden',
     padding: 12,
     textAlign:'center',
  }
});
