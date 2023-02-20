import {Card} from "../Card/Card";
import { connect, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions/actions";
import { useRef } from "react";
import styled from "styled-components";

const DivCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const styleSelect = {
  marginRight: "15px",
  padding: "10px",
  borderRadius: "5px",
};

export function Favorites({myFavorites}){

    const filter = useRef(null);
    const order = useRef(null);
    const dispatch = useDispatch();

    function handleReset(e){
        dispatch({type: "RESET"});
        filter.current.value = "";
        order.current.value = "";
    }

    return(
        <>
            <select
                style={styleSelect}
                ref={order}
                onChange={(e) => dispatch(orderCards(e.target.value))}
            >
                {["Ascendente", "Descendente"].map((e, i) => (
                    <option value={e} key={i}>
                        {e}
                    </option>
                ))}
            </select>

            <select
                style={styleSelect}
                ref={filter}
                onChange={(e) => dispatch(filterCards(e.target.value))}
            >
                {["Male", "Female", "unknown", "Genderless"].map((e, i) => (
                    <option value={e} key={i}>
                        {e}
                    </option>
                ))}
            </select>

            <button value="reset" onClick={handleReset}>
                Reset
            </button>

            <DivCards>
                {myFavorites.length === 0 ? (
                    <p style={{ color: "violet", marginTop: "150px", fontSize: "24px" }}>
                        ¡Agrega un favorito!
                    </p>
                ) : (
                    myFavorites.map((e, i) => (
                        <Card 
                            name={e.name}
                            id={e.id}
                            gender={e.gender}
                            image={e.image}
                            onClose={false}
                            fav={true}
                            key={i++}
                        />
                    ))
                )}
            </DivCards>
        </>
    );
}

export function mapStateToProps(state){
    return{
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites);