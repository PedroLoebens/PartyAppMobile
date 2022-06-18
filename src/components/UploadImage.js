import React from "react";
import { Button, PermissionsAndroid, SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";

export default function UploadImage() {
const requestCameraPermission = async () => {
   try {
      const granted = await PermissionsAndroid.request(
         PermissionsAndroid.PERMISSIONS.CAMERA,
         {
            title: "permissao para uso da camera",
            message:
               "Este aplicativo precisa de acesso a sua Camera " +
               "Para que possa tirar Fotos.",
            buttonNeutral: "Ask Me Later",
            buttonNegative: "Cancel",
            buttonPositive: "OK"
         }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
         console.log("You can use the camera");
      } else {
         console.log("Camera permission denied");
      }
   } catch (err) {
      console.warn(err);
   }
   return (
      <SafeAreaView>
         <View style={styles.container}>
            <Text style={styles.item}>Try permissions</Text>
            <Button title="Escolha uma imagem" onPress={requestCameraPermission} />
         </View>
      </SafeAreaView>
   );
};



const styles = StyleSheet.create({
   container: {
      flex: 1,
      justifyContent: "center",
      paddingTop: StatusBar.currentHeight,
      backgroundColor: "#ecf0f1",
      padding: 8
   },
   item: {
      margin: 24,
      fontSize: 18,
      fontWeight: "bold",
      textAlign: "center"
   }
})
}