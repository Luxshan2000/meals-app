import { createSlice } from "@reduxjs/toolkit";
import { retrieveList, saveList } from "../../utils/storage";





const favouriteSlice = createSlice({
    name:"favourites",
    initialState:{
        ids: [],
        isloading : false
    },
    reducers:{
        addFavourite : (state, action) => {
            state.ids.push(action.payload.id)
            saveList(state.ids)
        },
        removeFavourite : (state, action) =>{
            state.ids.splice(state.ids.indexOf(action.payload.id),1)
            saveList(state.ids)
        },
        toggleStatus : (state, action) => {
            state.isloading = !state.isloading
        },
        setFetchData: (state, action) =>{
            state.ids = action.payload.list
            
        }
    }
})




export const addFavourite = favouriteSlice.actions.addFavourite
export const removeFavourite = favouriteSlice.actions.removeFavourite
export const setFetchData = favouriteSlice.actions.setFetchData
export const toggleStatus = favouriteSlice.actions.toggleStatus
export default favouriteSlice.reducer