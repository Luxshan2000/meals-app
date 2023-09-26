import React, { useContext, useEffect, useLayoutEffect, useState } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/mealDetails/Subtitle'
import List from '../components/mealDetails/List'
import IconButton from '../components/IconButton'
import { useDispatch, useSelector } from 'react-redux'
import { addFavourite, removeFavourite } from '../store/redux/favourite'
// import { FavouriteContext } from '../store/context/FavouriteContext'

function MealDetailsScreen({route, navigation}) {
    const selectedMeal = route.params.item
    

    if(!selectedMeal){
      return <Text>Loading...</Text>
    }

    // const value = useContext(FavouriteContext)
    const value = useSelector((state)=>state.favouriteMeals.ids)
    const dispatch = useDispatch()


    
    const isFavourite = value.includes(selectedMeal.id) //value.ids.includes(selectedMeal)

    const handleTapMe = ()=>{
      if(isFavourite){
        // value.removeFavourite(selectedMeal)
        dispatch(removeFavourite({id:id}))
        
      }else{ 
        // value.addFavourite(selectedMeal)
        dispatch(addFavourite({id:id}))
        
      }
    }
   
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight: ()=> <IconButton color="yellow"  icon= {isFavourite ? "star" : "star-outline"}   onPress={handleTapMe} />
      })
    })

  return (
    <ScrollView style={styles.root}>
        <Image source={{uri: selectedMeal.imageUrl}} style={styles.image} />
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails textStyle={[styles.detailsText]} item={selectedMeal} /> 
        <View style={styles.outter}>
          <View style={styles.inner}>
            <Subtitle>Ingredients</Subtitle> 
            <List data={selectedMeal.ingredients} />

            <Subtitle>Steps</Subtitle>
            <List data={selectedMeal.steps} />
          </View>
        </View>
        
        
    </ScrollView>
  )
}

export default MealDetailsScreen

const styles = StyleSheet.create({
  root:{
    marginBottom:12
  },
  image:{
    width:'100%',
    height:350
  },
  title:{
    fontWeight:'bold',
    margin:8,
    fontSize:24,
    textAlign:'center',
    color:'lightgray'
  },
  detailsText:{
    color:'lightgray'
  },
  inner:{
    width:'90%'
  },
  outter:{
    alignItems:'center'
  }
})
