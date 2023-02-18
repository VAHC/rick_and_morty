import { connect } from "react-redux"
import {Card} from "../Card/Card"

export function Favorites({myFavorites}){
    return(
        <div>
            {myFavorites.length && myFavorites.map(fav => (
                <Card 
                name={fav.name}
                id={fav.id}
                key={fav.id}
                gender={fav.gender}
                image={fav.image}
                />
            ))}
        </div>
    )
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)