const http = require('http');
const characters = require('../utils/data'); // me traigo el archivo

http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    
    if(req.url.includes('rickandmorty/character')){
        // console.log(req.url.split('/').at(-1));
        let id = req.url.split('/').at(-1); // obtengo el id, último elemento del arreglo
        // let id = req.url.split('/').pop();

        // const charId = characters.forEach((charac) => {
        //     if(charac.id === Number(id)){
        //         return charac;
        //     }
        // });
        // let characterFilter = characters.filter(char => char.id === Number(id))
        let characterFilter = characters.find(char => char.id === Number(id))
        
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(JSON.stringify(characterFilter));
    }
}).listen(3001, 'localhost');

// filter: me devuelve un array con una sola posición donde esta el objeto
// find: me devuelve directamente el objeto