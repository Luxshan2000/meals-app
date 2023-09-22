import React from 'react'
import { Text, View } from 'react-native'

function MealDetails({route}) {
    const id = route.params.mealId
  return (
    <View>
        <Text>Meal details of {id}</Text>
    </View>
  )
}

export default MealDetails
