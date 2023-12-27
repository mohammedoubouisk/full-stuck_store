const {MongoClient} = require('mongodb')
const url = "mongodb://127.0.0.1:27017"

const connect_db = async(app)=>{
    const client = new MongoClient(url)
    const db = client.db('store')

    try{
        await client.connect()
        app.locals.client = client
        app.locals.db = db
        console.log("connect to db success")
    }
    catch(error){
        console.error(error)
    }
}
module.exports=connect_db;