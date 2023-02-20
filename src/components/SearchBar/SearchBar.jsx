import { useState } from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(props) {

   const [id, setId] = useState(0); // Aqui guardo lo que el usuario me pase por el input de abajo "tipo string"
   
   const handleChange = (e) => {
      const {value} = e.target; // el value lo obtengo de (e.target)
      setId(value); // Aqui cambio el estado
   } // el value o id que me pase el usuario lo cargo en "character"
   
   return (
      <div>
         <input 
            className={styles.Input} 
            type='search' 
            placeholder='Search' 
            onChange={handleChange}
         />
         
         <button 
            className={styles.Button} 
            onClick={() => 
            props.onSearch(id)}>
            Add
         </button>
         
         <button 
            className={styles.Button} 
            onClick={props.random}>
            Random Character
         </button>
      </div>
   );
}
