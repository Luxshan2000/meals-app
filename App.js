import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import {  StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';



const Stack = createNativeStackNavigator()




export default function App() {
  const [isFontLoaded] = useFonts({
    POPPINS_REGULAR : require("./fonts/Poppins-Regular.ttf")
  })
  if(!isFontLoaded){
    return null
  }
  return (
    <>
      <StatusBar style='light' backgroundColor='#351401' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle:{backgroundColor:"#351401"},
          headerTintColor:"white",
          contentStyle:{backgroundColor:'#3f2f25'}
        }}>
          <Stack.Screen name='categories' component={CategoriesScreen}
           options = {{
            title:"All Categories"
           }}
           />
          <Stack.Screen name='meals' component={MealsOverviewScreen}
          // options ={({route, navigation})=> {
          //   const catId = route.params.categoryId
          //   return {
          //     title:catId
          //   }
          // }}
           />
        </Stack.Navigator>
      </NavigationContainer>
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
