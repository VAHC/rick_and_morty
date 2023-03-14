const {Router} = require("express");
let {favs} = require("../utils/favs")

const favsRouter = Router();

favsRouter.post("/create", (req, res) => {
    favs.push({...req.body})
    //res.status(201).json({msg: "Agregado OK", data: favs});
    res.status(201).json(favs); // favs es el arreglo
});
favsRouter.get("/get", (req, res) => {
    return res.json(favs);
});
favsRouter.delete("/delete/:id", (req, res) => {
    const {id} = req.params;
    const newFavs = favs.filter((pj) => pj.id !== Number(id));
    favs = newFavs;
    // return res.status(200).json({msg: "Deleted", data: favs});
    return res.status(200).json(favs);
});

module.exports = favsRouter;