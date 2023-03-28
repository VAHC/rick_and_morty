// CON LA API
const URL = "https://rickandmortyapi.com/api/character/";
//const { exists } = require('@11ty/eleventy/src/TemplatePath');
const axios = require('axios');

async function getCharById (req, res) {
    const {id} = req.params; // {id:12}
    // "https://rickandmortyapi.com/api/character/12"
    try { 
        const response = await axios(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await response.data
        const character = {
            id: data.id,
            name: data.name,
            species: data.species,
            image: data.image,
            gender: data.gender,
        };
        res
            .status(200)
            .json(character);
    } catch (error) {
        res
            .status(500)
            .send(error.message);
    }            
}

module.exports = {getCharById};
