const {filterData, URL} = require('./getCharById');
const axios = require('axios');

const getCharDetail = async (req, res) => {
    const params = req.params; 

    try {
        const { data } = await axios.get(`${URL}${params.id}`);
        const obj = filterData(data);
        res.status(200).json(
            { 
                ...obj, 
                status: data.status, 
                origin: data.origin 
            });
    } catch (error) {
        res.status(500).json({ message: error }); 
    }
}

module.exports = {getCharDetail};










// CON PROMESAS

// const getCharDetail = (req, res) => {
//     const {detailId} = req.params; // {id:12}
//     // "https://rickandmortyapi.com/api/character/12"
//     axios(URL + detailId)
//         .then(({data}) => {
//             const character = {
//                 image: data.image,
//                 name: data.name,
//                 gender: data.gender,
//                 species: data.species,
//                 status: data.status,
//                 origin: data.origin.name,
//                 id: data.id,
//             }
//             return res
//                     .status(200)
//                     .json(character);
//         })
//         .catch((err) => {
//             res
//                 .status(500)
//                 .send(err.message);
//         });
         
// };

// module.exports = {getCharDetail};

















// => {
//     const character = {
//         id: res.data.id,
//         name: res.data.name,
//         species: res.data.species,
//         image: res.data.image,
//         gender: res.data.gender,
//     };
//     res.status(200).json(character);
// },
// (err) => {
//     res.status(500).send(err.message);
// }
// );






















// const axios = require('axios');

// const getCharDetail = (res, id) => {
//     axios(`https://rickandmortyapi.com/api/character/${id}`)
//     .then(result => result.data)
//     .then(data => {
//         let character = {
//             name: data.name,
//             image: data.image,
//             gender: data.gender,
//             species: data.species,
//             status: data.status,
//             origin: data.origin.name
//         }
//         res
//         .writeHead(200, {'Content-type': 'application/json'})
//         .end(JSON.stringify(character))
//     })
//     .catch(err => { 
//         res
//         .writeHead(500, {'Content-type': 'text/plain'})
//         .end(`El personaje con id: ${id} no fue encontrado`)
//     })
// }

// module.exports = getCharDetail;