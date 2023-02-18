import React from "react";
import foto from '../../assets/Foto.png';
import styles from "./About.module.css";

export default function About(){
    return(
        <div className={styles.divAbout}>
            <h1>Soy Víctor Alfonso Hardoy</h1>
            <h2>Estudiante Web Full Stack Developer.</h2>
            <h2>Perteniente a la Cohorte PT11a.</h2>
            <h3>Este es el desarrollo de mi primera aplicación con REACT!.</h3>
            <img width="20%"
            src={foto}
            alt=""
          />
        </div>
    )
}