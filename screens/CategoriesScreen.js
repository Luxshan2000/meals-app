// import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { FlatList, } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'






function  CategoriesScreen ({navigation}) {

    // const navigation = useNavigation() 
    

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
