import React from 'react';
import Card from '../Card/Card.jsx';
import styles from './Cards.module.css';


export default function Cards(props) {
   const {characters} = props;
   let i = 0;
   return(
      <div className={styles.divCards}>
         {characters.length === 0 ? (
            <div style={{color: "yellow", marginTop: "150px", fontSize: "24px"}}>
               <h1>¡You can to look for Rick and Morty characters!</h1> 
            </div>
         ) : (
            characters.map((e) => (
               <Card
                  id={e.id}
                  name={e.name}
                  species={e.species}
                  gender={e.gender}
                  image={e.image}
                  onClose={() => props.onClose(e.id)}
                  key={i++}
               />
            ))
         )}   
      </div>
   ); 
}
