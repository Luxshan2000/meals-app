import AsyncStorage from '@react-native-async-storage/async-storage';



// for favourite 
export const retrieveList = async () => {
    try {
      const listString = await AsyncStorage.getItem('@MealApp:favids')
      if (listString !== null) {
        return JSON.parse(listString)
      } else {
        return []
      }
    } catch (error) {
      console.error('Error retrieving data:', error)
    }
}


export const saveList = async (finalList) => {
    try {
      // Serialize the list to JSON and save it as a string
      
      
      const listString = JSON.stringify(finalList);
      await AsyncStorage.setItem('@MealApp:favids', listString)
      console.log('List saved successfully')
    } catch (error) {
      console.error('Error saving list:')
    }
}