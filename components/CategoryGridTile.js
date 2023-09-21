import React from 'react'
import { Pressable, View, Text, StyleSheet } from 'react-native'

function CategoryGridTile({title, color}) {
  return (
    <View style={[styles.container,{backgroundColor:color}]}>
        <Pressable style={styles.button} android_ripple={{color:'lightGray'}}>
            <View style={styles.innerContainer}>
                <Text style={styles.textContainer}>{title}</Text>
            </View>
        </Pressable>
    </View>
  )
}

export default CategoryGridTile


const styles = StyleSheet.create({
    container:{
        flex:1,
        elevation:2,
        margin:16, height:150, 
        borderRadius:15, 
        overflow:'hidden'},
    innerContainer:{
        flex:1, 
        justifyContent:'center', 
        alignItems:'center'},
    button:{
        flex:1, 
        width:'100%'},
    pressedButton:{
        color:'lightGray'
    },
    textContainer:{
        fontWeight:"bold",
        fontSize:18,
        fontFamily:'POPPINS_REGULAR'
    }
})