import React, { Component } from 'react'
import { FlatList, Text, View } from 'react-native'
import CategoryGridTile from '../components/CategoryGridTile'
import { CATEGORIES } from '../data/dummy-data'



function renderCategoryItem(item) {
    
    return (
        <CategoryGridTile title={item.title} color={item.color}/>
    )
}


function  CategoriesScreen () {
    return (
      <FlatList 
        data={CATEGORIES}
        renderItem={(data)=>renderCategoryItem(data.item)}
        keyExtractor={(item)=> item.id}
        numColumns={2}/>
    )
}



export default CategoriesScreen
