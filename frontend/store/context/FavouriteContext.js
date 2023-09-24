import { Children, createContext, useState } from "react"



export const FavouriteContext = createContext({
    ids:[],
    addFavourite: (id)=> {},
    removeFavourite: (id)=> {}
})


export const FavouriteContextProvider = ({children})=>{
    const [favouriteMealIds,setFavouriteMealIds] = useState([])

    function removeFavourite(id) {
        setFavouriteMealIds((prv)=>prv.filter((mealId)=> mealId !== id))
    }

    function addFavourite(id) {
        setFavouriteMealIds((prv)=> [...prv, id])
    }


    const value = {
        ids: favouriteMealIds,
        addFavourite: addFavourite,
        removeFavourite: removeFavourite
    }

    return (
        <FavouriteContext.Provider value={value}>
            {children}
        </FavouriteContext.Provider>
    )
}


