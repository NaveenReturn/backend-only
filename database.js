const mongoose = require("mongoose");

const Database = ()=>{
    const LOCAL_DB= "mongodb://127.0.0.1:27017/google"
     mongoose.connect(LOCAL_DB).then((con)=>{
         console.log(`Database this port start ${con.connection.host}`);
     })
}
Database()