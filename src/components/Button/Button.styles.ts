import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: 'lightblue',
    borderRadius: 12,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 16,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      height: 2,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  disableBtn: {
    backgroundColor: 'lightgray',
  },
  disableTxt: {
    color: 'gray',
  },
  buttonText: {
    textAlign: 'center',
    color: 'rgb(29, 29, 29)',
  },
});
