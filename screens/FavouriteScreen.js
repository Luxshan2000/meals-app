import { useContext } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import MealList from '../components/MealList'
import { MEALS } from '../data/dummy-data'
import { FavouriteContext } from '../store/context/FavouriteContext'

function FavouriteScreen() {

  const value = useContext(FavouriteContext)
  const items = value.ids

  const favIds = useSelector((state)=> state.favouriteMeals.ids)

  

  const lists = MEALS.filter((item)=> favIds.includes(item.id))

  
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
