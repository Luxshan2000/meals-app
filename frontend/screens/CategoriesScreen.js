// import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { FlatList, } from 'react-native'
import { useDispatch } from 'react-redux'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'
import NavigationLoadingScreen from './NavigationLoadingScreen'
import { toggleStatus } from '../store/redux/favourite'




function  CategoriesScreen ({navigation}) {

    // const navigation = useNavigation()
    const  dispatch = useDispatch()



    
    

    function renderCategoryItem(item) {

        const navigationHandler = ()=>{
            dispatch(toggleStatus())
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
