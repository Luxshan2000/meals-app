import React from 'react'
import { View , Text, Image, StyleSheet, Pressable, Platform} from 'react-native'

function MealItem({item}) {
  return (
    <View style={styles.mealItem}>
        <Pressable style={({pressed})=> pressed ? styles.buttonPressed :null } android_ripple={{color:"#ccc"}}>
            <View style={styles.innerContainer}>
            <Image source={{uri:item.imageUrl}} style={styles.image} />
            <Text style={styles.mealName}>{item.title}</Text>
            <View style={styles.details}>
                <Text>{item.duration}</Text>
                <Text>{item.complexity.toUpperCase()}</Text>
                <Text>{item.affordability.toUpperCase()}</Text>
            </View>
            </View>
        </Pressable>
    </View>
  )
}

export default MealItem

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:200
    },
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow: Platform.OS == "android" ? 'hidden' : 'visible', //for ios
        backgroundColor:'white',
        elevation:1,
        shadowColor:'black',
        shadowOpacity:0.25,
        shadowOffset:{width:0, height:2},
        shadowRadius:8
    },
    mealName:{
        fontWeight:'bold',
        textAlign:'center',
        margin:8
    },
    buttonPressed:{
        opacity: 0.8
    },
    details:{
        flexDirection:'row',
        gap:20,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    }
})
