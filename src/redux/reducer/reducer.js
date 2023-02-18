import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/types";

const initialState = {
    myFavorites: []
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites, payload],
            }
        case DELETE_PRODUCT:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((fav)=>{
                    return fav.id !== payload;
                })
            }
        default:
            return{
                ...state
            };
    }
};

export default rootReducer;

// case DELETE_PRODUCT:
//     return{
//         const filtered = state.myFavorites.filter(
//             fav => fav.id !== payload
//         )      
//          return{
//          ...state
//          myFavorites: filtered
//    }
// }