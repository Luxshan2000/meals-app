import { useLayoutEffect } from "react"   //something want to render before rendering the component
import { View, Text, FlatList } from "react-native"
import MealItem from "../components/MealItem"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy-data"
import { CATEGORIES } from "../data/dummy-data"
function MealsOverviewScreen({route, navigation}) {
    const catId = route.params.categoryId 
    
    const items = MEALS.filter((item)=> item.categoryIds.includes(catId) )
    

    useLayoutEffect(()=>{
        const catTitle = CATEGORIES.find((item)=> item.id ===catId).title
        navigation.setOptions({
            title: catTitle
        })

    
    },[ catId, navigation])
    
    
  return (
    <MealList items={items} />
  )
}

export default MealsOverviewScreen
