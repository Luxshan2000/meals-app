import { useContext, useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { FavouriteContext } from '../store/context/FavouriteContext'

function FavouriteScreen() {

  // const value = useContext(FavouriteContext)
  // const items = value.ids

  const [meals, setMeals] = useState([])

  const favIds = useSelector((state)=> state.favouriteMeals.ids)

  


  useEffect(()=>{
      
    // Define the URL you want to fetch data from
    const apiUrl = `http://192.168.8.182:5000/api/get/meal/${"*"}`;
  
    // Make a GET request using fetch
    
    fetch(apiUrl)
      .then((response) => response.json())
      .then((responseData) => {
        setMeals(responseData)
      })
      .catch((err) => {
        console.log('Error fetching data')
        
      })
    // setItems( MEALS.filter((item)=> item.categoryIds.includes(catId) ))
  },[])
  

  const lists = meals.filter((item)=> favIds.includes(item._id))

  
  if(lists.length === 0){
    return (
      <View style={styles.root}>
        <Text style={styles.text}>You have no favourite meals yet.</Text>
      </View>
    )
  }

  return (
    <MealList items={lists} />
  )
}

export default FavouriteScreen

const styles = StyleSheet.create({
  root:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  text:{
    color:'white',
    fontSize:16
  }
})
