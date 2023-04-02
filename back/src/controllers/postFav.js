const {Favorite} = require('../DB_connection');

const postFav = async (req, res) => {
    const {name, status, species, gender, origin, image} = req.body;
    try {
        if(!name || !status || !species || !gender || !origin || !image) 
            res.status(401).json({message: 'Faltan datos.'})

        const [fav, created] = await Favorite.findOrCreate({
            where: {
                id,
                name, 
                //status, 
                species, 
                gender, 
                //origin, 
                image
            }
        });
        fav.addUser(idUser);
        res.status(200).json(fav);
        
    } catch (error) {
        res.status(500).json({message: error})
    }
};

module.exports = {postFav};