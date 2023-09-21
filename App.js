import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  const [isFontLoaded] = useFonts({
    POPPINS_REGULAR : require("./fonts/Poppins-Regular.ttf")
  })
  if(!isFontLoaded){
    return null
  }
  return (
    <>
      <StatusBar style='light' />
      <CategoriesScreen/>
    </>
        
      

  
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingTop:30,
    paddingHorizontal:10
  },
});
