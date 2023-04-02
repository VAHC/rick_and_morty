const PORT = 3001;
const app = require('./app')
const {saveApiData} = require('./controllers/saveApiData');
const {sequelize} = require('./DB_connection');


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


















