const {Router} = require("express");

const {getCharById} = require('../controllers/getCharById');
const {getCharDetail} = require("../controllers/getCharDetail");

const {postUser} = require('../controllers/postUser');
const {postFav} = require('../controllers/postFav');
const {getFavs} = require('../controllers/getFavs.js');
const {login} = require('../controllers/login');
const {deleteFav} = require('../controllers/deleteFav');


const router = Router();

// ya tiene "/rickandmorty/" antes
router.get("/onsearch/:id", getCharById);
router.get("/detail/:detailId", getCharDetail);

router.post("/fav", postFav);
router.get("/fav", getFavs);
router.delete("/fav/:id", deleteFav);

router.post('/login', postUser);
router.get('/login', login);


module.exports = router;