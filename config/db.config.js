const { MongoClient } = require('mongodb');
const {config} = require('dotenv');
config();

const uri = process.env.URL;
const dbName = process.env.DB_NAME;

const client = new MongoClient(uri);

const db = client.db(dbName);

const connectDB = async ()=>{
    try {
        await client.connect();
        console.log('connected to sb successfully')
    } catch (error) {
       console.log(error) 
    }
}

module.exports = {connectDB, db}