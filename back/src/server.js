// const express = require('express');
// const server = express();
// const cors = require("cors");
// const morgan = require("morgan");

// const router = require("./routes/index");
// const favsRouter = require("./routes/favsRouter");

// server.use(express.json()) // para que funcione mi servidor con formato JSON
// server.use(cors()); // habilito a todos a hacer solicitudes a mi server
// server.use(morgan("dev"));
// server.use("/rickandmorty", router);
// server.use("/favs", favsRouter);

const PORT = 3001;
const app = require('./app')
const {saveApiData} = require('./controllers/saveApiData');
const {sequelize} = require('./DB_connection');
const getAllChars = require('./controllers/getAllChars');
const { default: axios } = require('axios');
const postFav = require('./controllers/postFav');
const getAllFavorites = require('./controllers/getAllFavorites');
const deleteFavoriteById = require('./controllers/deleteFavoriteById');

sequelize.sync({force:true}).then( async () => {
   console.log('DB connected, master');
   // console.log(await saveApiData());
   await saveApiData(); // va el await porque es un promesa que se quedaría en pendiente
   
   app.listen(PORT, () => {
      console.log('Server raised in port ' + PORT);
   })
}).catch((error) => {
   console.log(error);
})

app.get('/rickandmorty/allCharacters', async (req, res) => {
   try {
       const allCharacters = await getAllChars();

       res.status(200).json(allCharacters);
   } catch (error) {
       res.status(404).send('Hubo un problemilla');
   }
})

app.get('/rickandmorty/character/:id', async (req, res) => {
   try {
      const {id} = req.params;

      const response = await axios(`https://rickandmortyapi.com/api/character`);
      const data = response.data;

      const infoCharacter = {
         id: data.id,
         name: data.name,
         species: data.species,
         gender: data.gender,
         image: data.image
      } 

      res.status(200).json(infoCharacter);
   
   } catch (error) {
      res.status(404).send(error.message);
   }
})

app.get('/rickandmorty/detail/:detailId', async (req, res) => {
   try {
      const {detailId} = req.params;

      const {data} = await axios(`https://rickandmortyapi.com/api/character`);

      const infoCharacterDetail = {
         name: data.name,
         status: data.status,
         species: data.species,
         gender: data.gender,
         origin: data.origin.name,
         image: data.image
      }

      res.status(200).json(infoCharacterDetail);
   } catch (error) {
      res.status(404).send(error.message);
   }
})

app.post("/rickandmorty/fav", async (req, res) => {
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

app.delete('/rickandmorty/fav/:id', async (req, res) => {
   try {
      const {id} = req.params;
      const deleteFavorite = await deleteFavoriteById(parseInt(id));

      if(deleteFavorite.error) throw new Error(deleteFavorite.error)

      return res.status(200).send(deleteFavorite);
   } catch (error) {
      return res.status(404).send(error.message);
   }

   
})


// SIN TRY CATCH
// app.delete('/rickandmorty/fav/:id', (req, res) => {
//    const {id} = req.params;

//    const favFiltered = fav.filter(char => char.id !== parseInt(id));
//    fav = favFiltered;

//    res.status(200).send('Se eliminó correctamente')
// })
















// Clase de Web Server

// const http = require('http');
// const getCharById = require('./controllers/getCharById')
// const getCharDetail = require('./controllers/getCharDetail')

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     let id = req.url.split('/').at(-1); 

//     if(req.url.includes('onsearch')){
//         getCharById(res, id)
//     }
//     if(req.url.includes('detail')){
//         getCharDetail(res, id)
//     }
    
// }).listen(3001, 'localhost');



// const http = require('http');
// const characters = require('../utils/data'); // me traigo el archivo

// http.createServer((req, res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*')
    
//     if(req.url.includes('rickandmorty/character')){
//         // console.log(req.url.split('/').at(-1));
//         let id = req.url.split('/').at(-1); // obtengo el id, último elemento del arreglo
//         // let id = req.url.split('/').pop();

//         // const charId = characters.forEach((charac) => {
//         //     if(charac.id === Number(id)){
//         //         return charac;
//         //     }
//         // });
//         // let characterFilter = characters.filter(char => char.id === Number(id))
//         let characterFilter = characters.find(char => char.id === Number(id))
        
//         res.writeHead(200, {'Content-type': 'application/json'});
//         res.end(JSON.stringify(characterFilter));
//     }
// }).listen(3001, 'localhost');

// // filter: me devuelve un array con una sola posición donde esta el objeto
// // find: me devuelve directamente el objeto