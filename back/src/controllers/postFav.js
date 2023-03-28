const {Favorite} = require('../DB_connection');

const postFav = async (character) => {
    try {
        const {name, status, species, gender, origin, image} = character;

        if(!name || !status || !species || !gender || !origin || !image) 
            throw new Error('Faltan datos obligatorios, master') 
        
        const newFav = {
            name, status, species, gender, origin, image
        }

        
        await Favorite.create(newFav);

        return newFav; 

    } catch (error) {
        return {error: error.message};
    }
}

// Object.keys: crea un array de las keys del objeto que nosotros le pasemos

module.exports = postFav;






// Con array y sin DB

// const fav = []

// const postFav = async (req, res) => {
//     try {
//         fav.push(req.body)
//         console.log("fav posts = ", fav);
//         res.status(200).json(req.body)
//     } catch (error) {
//         res.status(500).send(error.message)
//     }
// }