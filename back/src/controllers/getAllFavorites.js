const axios = require('axios');
const {Favorite} = require('../DB_connection');

async function getAllFavorites (req, res) {
    try { 
        const allFavorites = await Favorite.findAll();

        if(!allFavorites) throw new Error('No hay Favoritos =(')

        return allFavorites;
        
    } catch (error) {
        return {error: error.message}
    }            
}

module.exports = getAllFavorites;



// CON LA API
// const URL = "https://rickandmortyapi.com/api/character/";
//const { exists } = require('@11ty/eleventy/src/TemplatePath');
// const axios = require('axios');

// async function getCharById (req, res) {
//     const {id} = req.params; // {id:12}
//     // "https://rickandmortyapi.com/api/character/12"
//     try { ``
//         const response = await axios(`https://rickandmortyapi.com/api/character/${id}`)
//         const data = await response.data
//         const character = {
//             id: data.id,
//             name: data.name,
//             species: data.species,
//             image: data.image,
//             gender: data.gender,
//         };
//         res
//             .status(200)
//             .json(character);
//     } catch (error) {
//         res
//             .status(500)
//             .send(error.message);
//     }            
// }

// module.exports = {getCharById};















// CON PROMESAS

// const getCharById = (req, res) => {
//     const {id} = req.params; // {id:12}
//     // "https://rickandmortyapi.com/api/character/12"
//     axios(URL + id).then((response) => {
//         const character = {
//             id: response.data.id,
//             name: response.data.name,
//             species: response.data.species,
//             image: response.data.image,
//             gender: response.data.gender,
//         };
//         res
//             .status(200)
//             .json(character);
//     },
//     (err) => {
//         res
//             .status(500)
//             .send(err.message);
//     }
//     );
// }

// module.exports = {getCharById};

























// Clase de Web Server

// const axios = require('axios');

// // function filterData(data){
// //     return{
// //         id: data.id,
// //         name: data.name,
// //         image: data.image,
// //         gender: data.gender,
// //         species: data.species
// //     }    
// // }

// const getCharById = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result => result.data)
//     //.then(({data})) // con esta desestructuración no iría la linea de arriba
//     .then(data => {
//         // const character = filterData(data);
//         let character = {
//             id: data.id,
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species
//         }
//         res.writeHead(200, {'Content-type': 'application/json'})
//         res.end(JSON.stringify(character))
//     })
//     .catch(err => {
//         res.writeHead(500, {'Content-type': 'text/plain'}),
//         res.end(`El personaje con id: ${id} no fue encontrado`)
//     })
// }

// module.exports = getCharById;