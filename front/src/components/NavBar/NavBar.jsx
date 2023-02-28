import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";

export default function NavBar(props) {
    return (

        <nav>
            <img src="https://imagensemoldes.com.br/wp-content/uploads/2021/04/Logo-Rick-and-Morty-PNG.png" 
                 alt="" 
                 width="20%" 
            />
            
            <SearchBar onSearch={props.onSearch} random={props.random} />
            
            <div>
                <Link to={"/home"} className={styles.links}>Home</Link>
                <Link to={"/favorites"} className={styles.links}>Favorites</Link>
                <Link to={"/about"} className={styles.links}>About</Link>
                <button className={styles.button} onClick={props.logout}>LogOut</button>
            </div>
        </nav>
    );
}