import { ADD_FAVORITE, DELETE_FAVORITE } from "./types"

export const addFavorite = (fav) => {
    return{
        type: ADD_FAVORITE, payload: fav
    };
}

export const deleteFavorite = (id) => {
    return{
        type: DELETE_FAVORITE, payload: id
    };
}