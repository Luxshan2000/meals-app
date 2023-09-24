import { StyleSheet, View, Text } from "react-native"


function MealDetails({item, style, textStyle}) {
  return (
    <View style={[styles.details,style]}>
        <Text style={[textStyle]}>{item.duration}min</Text>
        <Text style={[textStyle]}>{item.complexity.toUpperCase()}</Text>
        <Text style={[textStyle]}>{item.affordability.toUpperCase()}</Text>
    </View>
  )
}

export default MealDetails

const styles = StyleSheet.create({
    details:{
        flexDirection:'row',
        gap:20,
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    }
})