import { useEffect, useLayoutEffect, useState } from "react"   //something want to render before rendering the component
import { View, Text, FlatList } from "react-native"
import { useDispatch } from "react-redux"
import MealItem from "../components/MealItem"
import MealList from "../components/MealList"
import { MEALS } from "../data/dummy-data"
import { CATEGORIES } from "../data/dummy-data"
import { toggleStatus } from "../store/redux/favourite"
import NavigationLoadingScreen from "./NavigationLoadingScreen"
function MealsOverviewScreen({route, navigation}) {
    const [items, setItems] = useState([])
    const catId = route.params.categoryId 
    const dispatch = useDispatch()
    
    useEffect(()=>{
      
      // Define the URL you want to fetch data from
      const apiUrl = `http://192.168.8.182:5000/api/get/meal/${catId}`;
    
      // Make a GET request using fetch
      
      fetch(apiUrl)
        .then((response) => response.json())
        .then((responseData) => {
          setItems(responseData)
        })
        .catch((err) => {
          console.log('Error fetching data')
          
        }).finally(()=>{
          dispatch(toggleStatus())
        })
      // setItems( MEALS.filter((item)=> item.categoryIds.includes(catId) ))
    },[])
    
    

    useLayoutEffect(()=>{
        const catTitle = CATEGORIES.find((item)=> item.id ===catId).title
        navigation.setOptions({
            title: catTitle
        })

    
    },[ catId, navigation])
    
    
  return (
    items ? <MealList items={items} /> : null
    )
}

export default MealsOverviewScreen
