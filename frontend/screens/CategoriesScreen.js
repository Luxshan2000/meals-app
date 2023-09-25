// import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { FlatList, } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'






function  CategoriesScreen ({navigation}) {

    // const navigation = useNavigation() 

    useEffect(() => {
        // Define the URL you want to fetch data from
        const apiUrl = 'http://192.168.8.182:5000/api/get/meal';
    
        // Make a GET request using fetch
        fetch(apiUrl)
          .then((response) => response.json())
          .then((responseData) => {
            console.log(responseData)
          })
          .catch((error) => {
            console.log('Error fetching data')
          })
      }, [])
    

    function renderCategoryItem(item) {

        const navigationHandler = ()=>{
            navigation.navigate("meals", {categoryId:item.id})
        }

        return (
            <CategoryGridTile title={item.title} color={item.color} onPress={navigationHandler}/>
        )
    }

    return (
      <FlatList 
        data={CATEGORIES}
        renderItem={(data)=>renderCategoryItem(data.item)}
        keyExtractor={(item)=> item.id}
        numColumns={2}/>
    )
}



export default CategoriesScreen
