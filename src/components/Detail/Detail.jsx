import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";

const info = { textAlign: "left", fontSize: "24px", color: "orangered"};
const textos = { color: "yellow" };
const image = { borderRadius: "10px", border: "2px solid darkslateblue" };

export default function Detail(){
    const {detailId} = useParams();
    const [character, setCharacter] = useState({
        name: "",
        status: "",
        specie: "",
        gender: "",
        origin: "",
        image: "",
    });
    
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter({
                name: char.name,
                status: char.status,
                specie: char.specie,
                gender: char.specie,
                origin: char.origin.name,
                image: char.image,
              });
              console.log(character);
            } else {
              alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            alert("No hay personajes con ese ID");
          });
      }, [detailId]);    
    
        const navigate = useNavigate();

      return(
        <div>
            <div className={styles.divPrincipal}>
                <div style={info}>
                    {character.name && (
                        <p>
                            <b style={textos}>Name:</b> &#160; {character.name}
                        </p>
                    )}
                    {character.status && (
                        <p>
                            <b style={textos}>Status:</b> &#160; {character.status}
                        </p>
                    )}
                    {character.specie && (
                        <p>
                            <b style={textos}>Specie:</b> &#160; {character.specie}
                        </p>
                    )}
                    {character.gender && (
                        <p>
                            <b style={textos}>Gender:</b> &#160; {character.gender}
                        </p>
                    )}
                    {character.origin && (
                        <p>
                            <b style={textos}>Origin:</b> &#160; {character.origin}
                        </p>
                    )}
                </div>
                <img style={image} src={character.image} />
            </div>
            <button className={styles.Button} onClick={() => navigate('/home')}>Back To Home</button>
        </div>
    );
}