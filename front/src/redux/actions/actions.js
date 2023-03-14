import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "./types";
import axios from "axios";

export const addFavorite = (fav) => {
    return async function(dispatch){ // Clouser, para hacer la lógica asincrona
        try {
            const respuestaBack = await 
            axios.post("http://localhost:3001/favs/create", fav);
            return dispatch({
            type: ADD_FAVORITE, 
            payload: respuestaBack.data, // favs será mi .data cuando lo recibo aqui y se lo envío al reducer        
            });    
        } catch (error) {
            return dispatch({type: "ERROR", payload: error})
        }
        
        
        // CON PROMESAS-----
        // axios
        // .post("http://localhost:3001/favs/create", fav)
        // .then((response) => {
        //     return dispatch({
        //         type: ADD_FAVORITE, 
        //         payload: response.data, // favs será mi .data cuando lo recibo aqui y se lo envío al reducer        
        //     });
        // })    
    };
}

export const deleteFavorite = (id) => {
    return async function(dispatch){
        try {
            const response = await 
            axios.delete("http://localhost:3001/favs/delete/"+id)
            return dispatch({
                type: DELETE_FAVORITE, 
                payload: response.data,
            })    
        } catch (error) {
            return dispatch({type: "ERROR", payload: error})
        }
        
        // CON PROMESAS
        // axios
        // .delete("http://localhost:3001/favs/delete/"+id)
        // .then(response => {
        //     return dispatch({
        //         type: DELETE_FAVORITE, 
        //         payload: response.data,
        //     })
        // })
    }
};

export function getFavorites(){
    return async function(dispatch){
        try {
            const response = await 
            axios("http://localhost:3001/favs/get/");
            return dispatch({
                type: "GET_FAVS", 
                payload: response.data,
        });    
        } catch (error) {
            return dispatch({type: "ERROR", payload: error});
        }
        
    }
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