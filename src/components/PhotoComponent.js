import React from "react";
import { Text, TouchableOpacity, SafeAreaView, Image } from 'react-native';
import { Feather } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import { styles } from '../assets/css/style';



export function UploadImage() {

   const [image, setImage] = useState(null);

   const handleImageSelector = async () => {

      let result = await ImagePicker.launchImageLibraryAsync({
         mediaTypes: ImagePicker.MediaTypeOptions.All,
         allowsEditing: true,
         aspect: [4, 3],
         quality: 1,
      });

      console.log(result);

      if (!result.cancelled) {
         setImage(result.uri);
      }
   };

   
   return (
      <SafeAreaView>
         <Text style={styles.label}>Escolha uma Imagem:</Text>
         <TouchableOpacity style={styles.btnUpload} onPress={() => handleImageSelector()}>
            <Text style={styles.textBtnUpload}><Feather name="upload" size={15} />   Procurar Imagem</Text>
         </TouchableOpacity>
         {image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
         
      </SafeAreaView>
   )
}
