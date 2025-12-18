const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = process.env.URI;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


export async function connect(collection){
    const database = process.env.DB_Name;
    return client.db(database).collection(collection)

}