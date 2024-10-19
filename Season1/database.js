// NOTES

// Go to mongodb website
// create a free M0 cluster
// create a user
//Get the connection string 
// Install MongoDB Compass
// Npm i mongodb
// Create Connection
// CRUD the Document



// import  {MongoClient} from 'mongodb'
const {MongoClient}=require('mongodb')

//connection url
const url=`mongodb+srv://khushbuyad123:Khushbu%401023@cluster0.0wui2.mongodb.net/Noded?retryWrites=true&w=majority&appName=Cluster0`
const client=new MongoClient(url);


// database name
const dbName='Noded'

async function main() {
    // use connect method to connect to the server
    await client.connect()
    console.log('Connected sucessfully to server')
    const db=client.db(dbName)
    const collection=db.collection('Test')
    
     // Read
    const findResult=await collection.find({}).toArray();
    console.log('Found Documents', findResult)

    // Insert data
    const data={
        "name":"muskan",
        "city":"kanpur",
        "Area":"gurudev"
    }
    const newresult=await collection.insertMany([data]);
    console.log(newresult)



    return 'done.'

   
   
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());

