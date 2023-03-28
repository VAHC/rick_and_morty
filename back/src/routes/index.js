const {Router} = require("express");
const {getAllFavorites} = require("../controllers/getAllFavorites");
const {getCharById} = require('../controllers/getCharById');
const {getCharDetail} = require("../controllers/getCharDetail");
const router = Router();


// ya tiene "/rickandmorty/" antes
router.get("/onsearch/:id", getCharById);
//router.get("/onsearch/:id", getAllFavorites);
router.get("/detail/:detailId", getCharDetail);


module.exports = router;