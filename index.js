require("dotenv").config();

const server = require("./src/server");

const db = require("./src/lib/db")

const PORT = process.env.PORT || 8080; // si el puerto no esta asignado en db, asignar puerto 8080

db.connect()
.then(()=> {
     //metodo dentro de la promesa 
        console.log("DB conected")
        server.listen(PORT, ()=>{
            console.log(`server is running on port: ${PORT}`)
        })
    })
    .catch((error)=>{
        console.error("DB connection error: ", error);
    });