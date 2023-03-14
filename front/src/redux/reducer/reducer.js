import { ADD_FAVORITE, DELETE_FAVORITE, FILTER, ORDER } from "../actions/types";

const initialState = {
    allMyFavorites: [],
    myFavorites: [],
    errors: {}
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch(type){
        case ADD_FAVORITE:
            // const addFavorite = [...state.allMyFavorites, payload];
            // return{
            //     ...state,
            //     allMyFavorites: [...addFavorite],
            //     myFavorites: [...state.myFavorites],
            // }
            return{
                ...state,
                myFavorites: payload,
                allMyFavorites: payload,
                errors: {}
            }
        case DELETE_FAVORITE:
            // const deleteFavorite = state.allMyFavorites.filter(
            //     (e) => e.id !== payload
            // );
            // return{
            //     ...state,
            //     allMyFavorites: [...deleteFavorite],
            //     myFavorites: [...deleteFavorite],
            // };
            return{
                ...state,
                myFavorites: payload, // coloco solo payload porque es lo que le viene en el payload es lo que le envío en el back
                errors: {}
            }
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
        case "GET_FAVS":
            return{
                ...state,
                myFavorites: payload,
                errors: {}
            };
        case "ERROR":
            return{
                ...state,
                errors: payload,
            };
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