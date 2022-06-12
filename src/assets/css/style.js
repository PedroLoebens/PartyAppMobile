import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({ 
   scrollView: {
      marginVertical: 0,
      backgroundColor: '#ffffff',
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
   subtitle: {
      fontSize: 13,
      fontFamily: 'Roboto_400Regular',
      fontWeight: 'bold',
      paddingTop: 12,
      lineHeight: 15,
      textTransform: 'uppercase',
   },

   // Label e input page New e Search
   containerInputs: {
      marginTop: 20,
      alignSelf: 'center'
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

   // Button New NavBar
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

   // Btn Confirm page New e Search
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

   // Page Home
   titleHome: {
      fontSize: 36,
      fontFamily: 'Comfortaa_400Regular',
      lineHeight: 40,
      textTransform: 'uppercase',
   },
   gradientBtnBuy: {
      width: 110,
      height: 35,
      borderRadius: 50,
      alignSelf: 'flex-end',
      margin: 10,
      marginBottom: 20,
   },
   buttonBuyText: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 15,
      color: '#ffffff',
      marginTop: 3.5,
      textAlign: 'center',
      textAlignVertical: 'center',
   },
   containerEvents: {
      marginTop: 20,
      marginBottom: 20,
      borderRadius: 7,
      width: '100%',
      borderBottomWidth: 1,
   },
   imageEvent: {
      width: '100%',
      resizeMode: 'stretch',   // ou contain
      borderRadius: 10,  
   },
   titleEvent: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 15,
      padding: 10,
      textAlign: 'center',
      fontWeight: 'bold',
      borderBottomWidth: 0,
   },
   textEvent: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 13,
      padding: 10,
   },
   btnUpdate: {
      marginTop: 15,
   }, 
   textBtnUpdate: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 14,
      color: '#000000'
   },
   
   // Page New
   btnUpload: {
      marginTop: 4,
      marginBottom: 20,
   },
   textBtnUpload: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 14,
      color: '#000000'
   },

   //Page Search
});

export { styles };
