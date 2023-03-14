const express = require('express');
const server = express();
const cors = require("cors");
const morgan = require("morgan");
const PORT = 3001;
const router = require("./routes/index");
const favsRouter = require("./routes/favsRouter");

server.use(express.json()) // para que funcione mi servidor con formato JSON
server.use(cors()); // habilito a todos a hacer solicitudes a mi server
server.use(morgan("dev"));
server.use("/rickandmorty", router);
server.use("/favs", favsRouter);

server.listen(PORT, () => {
   console.log('Server raised in port ' + PORT);
});





















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