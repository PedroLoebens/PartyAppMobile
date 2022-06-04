import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
   gradientBtnNew: {
      width: 55,
      height: 30,
      borderRadius: 50,
   },
   iconPlus: {
      marginTop: 4.5,
      textAlign: 'center',
      textAlignVertical: 'center',
   },
   gradientBtnBuy: {
      width: 160,
      height: 45,
      borderRadius: 50,
   },
   buttonBuyText: {
      fontFamily: 'Comfortaa',
      fontSize: 17,
      color: '#ffffff',
      marginTop: 10,
      textAlign: 'center',
      textAlignVertical: 'center',
   },
   container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingLeft: 16,
      paddingRight: 16,
      paddingTop: 40,
  
   },
   title: {
      fontSize: 36,
      fontFamily: 'Comfortaa',
      lineHeight: 40,
   },
   titleHome: {
      fontSize: 36,
      fontFamily: 'Comfortaa',
      lineHeight: 40,
      textTransform: 'uppercase',
   },
   subtitle: {
      fontSize: 13,
      fontFamily: 'Roboto',
      fontWeight: 'bold',
      paddingTop: 12,
      lineHeight: 15,
      textTransform: 'uppercase',
   }
});

export { styles };
