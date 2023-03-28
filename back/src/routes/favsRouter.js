const {Router} = require("express");
const postFav = require('../controllers/postFav');
const getAllFavorites = require('../controllers/getAllFavorites');

const favsRouter = Router();

favsRouter.post("/rickandmorty/fav", async (req, res) => {
    try {
       const characterFav = await postFav(req.body);

       if(characterFav.error) throw new Error(characterFav.error)
       
       res.status(200).json(characterFav);
    } catch (error) {
        return res.status(404).send(error.message);
    }
    // res.status(201).json({msg: "Agregado OK", data: favs});
    // res.status(201).json(favs); // favs es el arreglo
    // res.status(200).send('Se guardaron correctamente los datos');
});

favsRouter.get("/rickandmorty/fav", async (req, res) => {
    try {
        const allFavorites = await getAllFavorites();

        if(allFavorites.error) throw new Error(allFavorites.error);

        return res.status(200).json(allFavorites);
    } catch (error) {
        return res.status(404).send(error.message)
    }
});

favsRouter.delete("/delete/:id", (req, res) => {
    const {id} = req.params;
    
    const newFavs = favs.filter(char => char.id !== Number(id));
    favs = newFavs;
    // return res.status(200).json({msg: "Deleted", data: favs});
    return res.status(200).json(favs);
    // res.status(200).send('Se eliminó correctamente');
});

module.exports = favsRouter;