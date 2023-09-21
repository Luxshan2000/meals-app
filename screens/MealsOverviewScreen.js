import { useLayoutEffect } from "react"   //something want to render before rendering the component
import { View, Text, FlatList } from "react-native"
import MealItem from "../components/MealItem"
import { MEALS } from "../data/dummy-data"
import { CATEGORIES } from "../data/dummy-data"
function MealsOverviewScreen({route, navigation}) {
    const catId = route.params.categoryId 
    
    const renderMealItem = (item)=>{
        return <MealItem item={item} />
    }

    

    useLayoutEffect(()=>{
        const catTitle = CATEGORIES.find((item)=> item.id ===catId).title
        navigation.setOptions({
            title: catTitle
        })

    
    },[ catId, navigation])
    
    
  return (
    <FlatList
        data={MEALS.filter((item)=> item.categoryIds.includes(catId) )}
        keyExtractor={(item) => item.id}
        renderItem={(itemData)=>renderMealItem(itemData.item)}
    />
  )
}

export default MealsOverviewScreen
