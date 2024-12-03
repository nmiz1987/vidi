import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderRadius: 12,
    flexDirection: 'row',
    alignContent: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
  },
  focus: {
    borderColor: 'lightblue',
    borderWidth: StyleSheet.hairlineWidth,
    shadowColor: 'lightgray',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.7,
    shadowRadius: 5.5,
    elevation: 10,
  },
  error: {
    backgroundColor: 'rgb(253, 50, 50)',
    borderWidth: 1,
    borderColor: 'rgb(255, 0, 0)',
  },
  startIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
  },
  endIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 8,
  },
  input: {
    color: 'rgb(29, 29, 29)',
    flex: 1,
    textAlign: 'left',
  },
  placeholderColor: {
    color: 'rgb(89, 89, 89)',
  },
});
