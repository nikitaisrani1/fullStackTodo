const mongoose=require('mongoose');
mongoose.connect('mongodb://0.0.0.0/Todo');

const db=mongoose.connection;//to check if the connection is true
db.on('error:',console.error.bind(console,"error connecting to db"));

db.once('open',function(){
    console.log("sucessfully connected to the database");
})
module.exports = db;
