import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "../actions/types";

const initialState = {
    allMyFavorites: [],
    myFavorites: [],
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAVORITE:
            const addFavorite = [...state.allMyFavorites, payload];
            return{
                ...state,
                allMyFavorites: [...addFavorite],
                myFavorites: [...state.myFavorites],
            }
        case DELETE_FAVORITE:
            const deleteFavorite = state.allMyFavorites.filter(
                (e) => e.id !== payload
            );
            return{
                ...state,
                allMyFavorites: [...deleteFavorite],
                myFavorites: [...deleteFavorite],
            };
        case FILTER:
            return{
                ...state, 
                myFavorites: state.allMyFavorites.filter(
                    (e) => e.gender === payload
                ),
            };
        case ORDER:
            let orderFavorites;
            if(payload === "Ascentente"){
                orderFavorites = state.myFavorites.sort((a,b) => 
                    a.id > b.id ? 1 : -1
                );
            }
            return{
                ...state,
                myFavorites: [...orderFavorites],
            };
        case "RESET":
            return{
                ...state,
                myFavorites: state.allMyFavorites,
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