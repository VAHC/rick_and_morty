import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./types"

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

export function filterCards(status){
    return{
        type: FILTER,
        payload: status,
    };
}

export function orderCards(id){
    return{
        type: ORDER,
        payload: id,
    };
}