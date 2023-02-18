import React from "react";
import validation from "./validation.js";
import styles from "./Form.module.css";

export default function Form (props) {

    const [userData, setUserData] = React.useState({ 
        username: '', 
        password: '' 
      });

    // const handleInputChange = (e) => {
    //    const value = e.target.value;
    //    const name = e.target.name;
    //    setUserData({ ...userData, [name]: value });
    //    setErrors(validateInputs(userData));
    
    //    console.log(errors);
    // };
    
    const handleInputChange = (evento) => { 
        setUserData({
            ...userData,
            [evento.target.name] : evento.target.value
        });

        setErrors(validation({
            ...userData,
            [evento.target.name] : evento.target.value
          }))
        console.log(errors);
    }

    const [errors, setErrors] = React.useState({
        username: "",
        password: "",
      });

    const handleSubmit = (evento) => {
        evento.prevenDefault();
        props.login(userData)
    };

    return(
        <div className={styles.div}>
            <h3 className={styles.h3}>"Rick and Morty authentication"</h3>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor="username" className={styles.label}>Username: </label>
                <input 
                    type="text" 
                    name="username"
                    placeholder="Ingrese el usuario..."
                    value={userData.username}
                    onChange={handleInputChange}
                    className={errors.username && styles.input && 'warning'}
                />
                <p className={styles.p && 'danger'}>{errors.username}</p>

                <label htmlFor="password" className={styles.label}>Password: </label>
                <input 
                    type="password" 
                    name="password"
                    placeholder="Ingrese una password..."
                    value={userData.password}
                    onChange={handleInputChange}
                    className={errors.password && styles.input && 'warning'}
                />
                <p className={styles.p && 'danger'}>{errors.password}</p>

                <button className={styles.button} type="submit">Login</button>
            </form>
            
        </div>
    )
}