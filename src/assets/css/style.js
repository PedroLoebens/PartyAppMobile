import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
   scrollView: {
      marginVertical: 0,
      backgroundColor: '#ffffff',
   },
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
      width: 110,
      height: 35,
      borderRadius: 50,
      alignSelf: 'flex-end',
      margin: 10
   },
   buttonBuyText: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 15,
      color: '#ffffff',
      marginTop: 3.5,
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
      fontFamily: 'Comfortaa_400Regular',
      lineHeight: 40,
   },
   titleHome: {
      fontSize: 36,
      fontFamily: 'Comfortaa_400Regular',
      lineHeight: 40,
      textTransform: 'uppercase',
   },
   subtitle: {
      fontSize: 13,
      fontFamily: 'Roboto_400Regular',
      fontWeight: 'bold',
      paddingTop: 12,
      lineHeight: 15,
      textTransform: 'uppercase',
   },
   label: {
      fontSize: 13,
      fontFamily: 'Roboto_400Regular',
      marginBottom: 4,
   },
   input: {
      borderWidth: 2,
      borderColor: "#000000",
      backgroundColor: '#ffffff',
      padding: 10,
      marginBottom: 18,
      width: 300
   },
   containerInputs: {
      marginTop: 20,
      alignSelf: 'center'
   },
   gradientBtnConfirm: {
      width: 160,
      height: 45,
      borderRadius: 50,
      alignSelf: 'center',
      marginBottom: 25,
   },
   buttonConfirmText: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 17,
      color: '#ffffff',
      marginTop: 7.3,
      textAlign: 'center',
      textAlignVertical: 'center',
   },
   ButtonUpload: {
      borderWidth: 1,
      borderRadius: 50,
      marginBottom: 15,
      paddingTop: 8,
      paddingBottom: 8,
      textAlign: 'center',
      textAlignVertical: 'center',
   },
   containerEvents: {
      marginTop: 20,
      marginBottom: 20,
      borderWidth: 2,
      borderRadius: 7,
      width: '100%',
      
   },
   imageEvent: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 13,
      padding: 10,
      borderLeftWidth: 1,
      borderRightWidth: 1,
      borderTopWidth: 1,
   },
   titleEvent: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 15,
      padding: 10,
      borderWidth: 1,
      textAlign: 'center',
      fontWeight: 'bold',
      borderTopWidth: 0
   },
   textEvent: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 13,
      padding: 10,
      borderWidth: 1,
   },
   priceEvent: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 13,
      padding: 10,
      borderWidth: 1,
      borderBottomWidth: 2
   },
   btnUpdate: {
      marginTop: 15,
      fontVariant: ''
   }, 
   textBtnUpdate: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 14,
      color: '#000000'
   }
});

export { styles };
