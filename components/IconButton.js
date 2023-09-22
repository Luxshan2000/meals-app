import { Pressable, StyleSheet } from "react-native"
import { Ionicons } from '@expo/vector-icons';

function IconButton({onPress, color, icon}) {
  return (
    <Pressable onPress={onPress} style={({pressed}) => pressed ? styles.Icopressed:null}>
       <Ionicons name={icon} size={28} color={color} />
    </Pressable>
  )
}

export default IconButton

const styles = StyleSheet.create({
    Icopressed:{
        opacity:0.3
    }
})
