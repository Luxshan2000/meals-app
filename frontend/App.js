import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import {  StyleSheet } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavouriteScreen from './screens/FavouriteScreen';
import { Ionicons } from '@expo/vector-icons';
// import {FavouriteContextProvider} from './store/context/FavouriteContext';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import { useEffect } from 'react';
import NavigationLoadingScreen from './screens/NavigationLoadingScreen';

const Stack = createNativeStackNavigator()
const Drawer = createDrawerNavigator()

function DrawerNavigator() {
  return (
    <Drawer.Navigator screenOptions={{
      headerStyle:{backgroundColor:"#351401"},
      headerTintColor:"white",
      sceneContainerStyle:{backgroundColor:'#3f2f25'},
      drawerContentStyle:{backgroundColor:'#351401'},
      drawerInactiveTintColor:'white',
      drawerActiveTintColor:'#351401',
      drawerLabelStyle:{fontSize:16},
      drawerActiveBackgroundColor:'#e4baa1'
      
    }}>
      <Drawer.Screen 
        name='categories' 
        component={CategoriesScreen}
        options={{
          title:'All Categories',
          drawerIcon:({color, size})=> (
            <Ionicons name="list" size={size} color={color} />
          )
        }} />
      <Drawer.Screen 
        name='favourite' 
        component={FavouriteScreen}
        options={{
          title:'Favourite',
          drawerIcon:({color, size}) =>(
            <Ionicons name='star' size={size} color={color} />
          )
        }} />
    </Drawer.Navigator>
  )
}



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
      {/* <FavouriteContextProvider> */}
      
      <Provider  store={store}>
        <NavigationLoadingScreen />
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerStyle:{backgroundColor:"#351401"},
            headerTintColor:"white",
            contentStyle:{backgroundColor:'#3f2f25'}
          }}>
            <Stack.Screen name='drawer' component={DrawerNavigator}
            options = {{
              headerShown:false
            }}
            />
            <Stack.Screen name='meals' component={MealsOverviewScreen}
            // options ={({route, navigation})=> {
            //   const catId = route.params.categoryId
            //   return {
            //     title:catId
            //     color: "#123456"
            //   }
            // }}
            />

            <Stack.Screen name='mealdetails' component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavouriteContextProvider> */}
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
