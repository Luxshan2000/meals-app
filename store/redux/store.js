import { configureStore } from "@reduxjs/toolkit";
import favouriteSlicer from "./favourite"

export const store = configureStore({
    reducer:{
        favouriteMeals: favouriteSlicer
    }
})