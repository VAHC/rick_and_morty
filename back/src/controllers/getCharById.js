const URL = "https://rickandmortyapi.com/api/character/";
const axios = require('axios');

async function getCharById (req, res) {
    const params = req.params; 
    
    try { 
        const {data} = await axios.get(`${URL}${params.id}`);
        const obj = filterData(data);
        
        res.status(200).json(obj);
    } catch (error) {
        res.status(500).json({message: error});
    }            
};

function filterData(data){
    return{
        id: data.id,
        name: data.name,
        species: data.species,
        gender: data.gender,
        image: data.image
    };
}

module.exports = {getCharById, filterData, URL};
