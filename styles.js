import {StyleSheet} from 'react-native'

export default StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    studentsContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    titleText: {
      color: '#f88ec1',
      fontWeight: '900',
      fontSize: 60,
    },
    box: {
        margin: 10,
        backgroundColor: 'lightgray',
        height: 100,
        width: 100,
        borderStyle: 'dashed',
        borderColor: 'darkslategray',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxText: {
      textAlign: 'center'
    },
  })