import React, { useState, useEffect } from 'react';
import styles from './Card.module.css';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import {addFavorite, deleteFavorite} from "../../redux/actions/actions";
import { connect } from 'react-redux';

const Button = styled.button`
  position: relative;
  right: -120px;
  top: 10px;
  background-color: blue;
  color: white;
  border: 0px;
  width: 30px;
  height: 30px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
`;
const styleGender = {
   display: "inline-block",
   fontSize: "20px",
   color: "purple",
 };
 const styleNav = {
      backgroundColor: "skyblue",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "space-around",
      padding: "5px 20px",
      marginButtom: "10px",
 }

export function Card(props) {

   const [isFav, setIsFav] = useState(props.fav);

   function handleFavorite(id){
      if(isFav){
         setIsFav(false);
         props.deleteFavorite(props.id);
      } else{
         setIsFav(true);
         props.addFavorite({
            name: props.name,
            species: props.species,
            gender: props.gender,
            image: props.image,
            id: props.id,
         });
      }
   }

   useEffect(() => {
      props.myFavorites &&
        props.myFavorites.forEach((fav) => {
          if (fav.id === props.id) {
            setIsFav(true);
          }
        });
    });   

   return (
      <div className={styles.divCard}>
         <div style={{ display: "flex", justifyContent: "space-between" }}>
            {props.onClose && <Button className={styles.button} onClick={props.onClose}>X</Button>}
            {
               isFav ? (
                  <button onClick={handleFavorite}>❤️</button>
               ) : (
                  <button onClick={handleFavorite}>🤍</button>
               )
            }      
         </div>         
         <Link to={`/detail/${props.id}`}>
            <nav style={styleNav}>
               <h3 className={styles.title}>{props.name}</h3>
            </nav>
         </Link>       
         <img className={styles.image} src={props.image} alt="" />
         <div className={styles.data}>
            <h2 className={styles.Specie}>{props.species}</h2>
            <h2 style={styleGender}>{props.gender}</h2>
         </div>     
      </div>
   );
}

export function mapDispatchToProps(dispatch) {
   return{
      addFavorite: (fav)=>{dispatch(addFavorite(fav))},
      deleteFavorite: (id)=>{dispatch(deleteFavorite(id))}
   }
}

export function mapStateToProps(state){
   return{
      myFavorites: state.myFavorites
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);

