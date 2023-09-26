import { createSlice } from "@reduxjs/toolkit";



const isNavigateSlice = createSlice({
    name:"isnavigate",
    initialState:{
        status: false 
    },
    reducers:{
        toggleStatus : (state, action) => {
            state.status = !state.status
        }
    }
})

export const toggleStatus = isNavigateSlice.actions.toggleStatus

export default isNavigateSlice.reducer