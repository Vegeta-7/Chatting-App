const mongoose = require('mongoose');

module.exports = () => {    
    try{
        mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to db")
    }catch(e){
        console.log(e);
        console.log('Not connected')
    }
}