import { FlatList } from "react-native"
import MealItem from "./MealItem"

function MealList({items}) {
    
    
    const renderMealItem = (item)=>{
        return <MealItem item={item} />
    }
       
  return (
    <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={(itemData)=>renderMealItem(itemData.item)}
    />
  )
}

export default MealList
