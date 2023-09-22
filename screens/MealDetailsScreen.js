import React, { useLayoutEffect } from 'react'
import { Button, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import { MEALS } from '../data/dummy-data'
import MealDetails from '../components/MealDetails'
import Subtitle from '../components/mealDetails/Subtitle'
import List from '../components/mealDetails/List'
import IconButton from '../components/IconButton'

function MealDetailsScreen({route, navigation}) {
    const id = route.params.mealId
    const selectedMeal = MEALS.find((item) => item.id === id)

    const handleTapMe = ()=>{
      console.log("Handle tap me!")
    }
   
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerRight: ()=> <IconButton color="yellow"  icon="star"  onPress={handleTapMe} />
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
