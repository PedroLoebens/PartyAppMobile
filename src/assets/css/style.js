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
   containerHeader: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      paddingLeft: 16,
      paddingRight: 16,
   },
   title: {
      fontSize: 36,
      fontFamily: 'Comfortaa_400Regular',
      lineHeight: 40,
   },
   titleSignUp: {
      fontSize: 36,
      fontFamily: 'Comfortaa_400Regular',
      lineHeight: 40,
      marginTop: 12,
   },
   subtitle: {
      fontSize: 13,
      fontFamily: 'Roboto_400Regular',
      fontWeight: 'bold',
      paddingTop: 12,
      lineHeight: 15,
      textTransform: 'uppercase',
   },
   standardButton: {
      width: 300,
      borderRadius: 5,
      backgroundColor: '#000000'
   },
   standardButtonNew: {
      width: 300,
      borderRadius: 5,
      backgroundColor: '#000000',
      marginBottom: 25,
   },
   standardButtonText: {
      fontSize: 14,
      fontFamily: 'Roboto_400Regular',
      textAlign: 'center',
      textAlignVertical: 'center',
      textTransform: 'uppercase',
      color: '#ffffff',
      textAlign: 'center',
      textAlignVertical: 'center',
      paddingTop: 12,
      paddingBottom: 12,
   },

   // Página Login 
   btnRegister: {
      marginTop: 25,
      textAlign: 'center',
      alignItems: "center",
   },

   textBtnRegister: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 14,
      color: '#000000'
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
      padding: 8,
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
      width: '100%',
      borderBottomWidth: 1,
   },
   imageEvent: {
      width: 302,
      height: 454,
      resizeMode: 'stretch',
      borderRadius: 10,  
      alignSelf:'center'
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
   buttonContainer: {
      flexDirection: 'row',
   },
   btnUpdate: {
      marginTop: 15,
      width: '50%',
   },
   btnLogOut: {
      marginTop: 15,
      textAlign: 'right',
      alignItems: 'flex-end',
      width: '50%',
   },  
   textBtnUpdate: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 14,
      color: '#000000'
   },
   
   // Page New
   message:(text='none')=>({
      fontSize: 15,
      color: '#0f5132',
      fontFamily: 'Comfortaa_400Regular',
      backgroundColor: '#d1e7dd',
      borderRadius: 8,
      marginTop: 25,
      padding: 15,
      textAlign: 'center',
      alignSelf: 'center',
      display: text
   }),
   messageError:(text='none')=>({
      fontSize: 15,
      color: '#842029',
      fontFamily: 'Comfortaa_400Regular',
      backgroundColor: '#f8d7da',
      borderRadius: 8,
      marginTop: 25,
      padding: 15,
      textAlign: 'center',
      alignSelf: 'center',
      width: 300,
      display: text
   }),
   btnUpload: {
      marginTop: 4,
      marginBottom: 20,
   },
   textBtnUpload: {
      fontFamily: 'Comfortaa_400Regular',
      fontSize: 14,
      color: '#000000'
   },
   imagePreview: {
      width: 302,
      height: 454,
      marginBottom: 20,
      alignSelf: 'center',
      borderRadius: 10,
   },

   //Page Search
   containerSearchEvents: {
      marginTop: 20,
      marginBottom: 20,
      borderBottomWidth: 1,
   }
});

export { styles };
