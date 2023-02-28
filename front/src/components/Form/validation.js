// export default function validateInputs(inputs){
//     let errors = {}
//     if(!inputs.username || !/\S+@\S+\.\S+/.test(inputs.username) 
//     || inputs.username.length >= 35) 
//     errors.username = 'Campo obligatorio a rellenar con un email de menos de 35 caracteres';
    
//     if(!inputs.password || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/.test(inputs.password)) 
//     errors.password = 'La contraseña debe tener entre 6 y 10 caracteres, y al menos un número';
    
//     return errors;
// }

export default function validateInputs(inputs){
    let errors = {}
    if(!inputs.username || !/\S+@\S+\.\S+/.test(inputs.username) || inputs.username.length >= 35) errors.username = 'Campo obligatorio a rellenar con un email de menos de 35 caracteres';
    if(!inputs.password || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/.test(inputs.password)) errors.password = 'La contraseña debe tener entre 6 y 10 caracteres, y al menos un número';
    return errors;
}




// export default function validation(inputs){
    
//     const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//     const regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/
//     const regexNumber = /^\(?(\d{3})\)?[-]?(\d{3})[-]?(\d{4})$/

//     const errors = {};


//     if(!regexEmail.test(inputs.username)){
//         errors.username = "Debe ser un correo electrónico";
//     }
//     if(!inputs.username){
//         errors.username = "No puede ser vacio";
//     }
//     if(inputs.username.length > 35){
//         errors.username = "Debe tener menos de 35 caracteres";
//     }
//     if(!regexNumber.test(inputs.password)){
//         errors.password = "La contraseña debe tener un número";
//     }
//     if(!regexPassword.test(inputs.password)){
//         errors.password = "Debe tener entre 6 y 10 caracteres";
//     }

//     return errors;


// }