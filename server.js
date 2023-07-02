
//import express modules
const express = require("express");

//import mongodb 
const { MongoClient } = require('mongodb');

//connect to mongodb
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
//create db
const dbName = 'company_db'
const collName = 'employees'

//create an instance of express app 
const app = express();

//we need convert all the json coming in to js object
//import body-parser
const bodyParser = require("body-parser")
app.use(bodyParser.json())

//use middleware to specify the source of static files needed in the application
app.use('/', express.static(__dirname + "/dist"))


//create a response for when frontend makes a request on endpoint '/get-profile'
app.get('/get-profile', async (req, res) => {
    const userData = {
        name: "Engr Moshman",
        email: "mosh@example.com",
        interests: "coding, cloud, 3d"
    } 
    //then connect to DB
    // await client.connect()
    // console.log("db is connected")
    //save to DB


    res.send(userData);
})

//create a response for when frontend request on endpoint '/update-profile'
app.post('/update-profile', async (req, res) => {
   const payload = req.body;

   //then connect to DB
   await client.connect()
   console.log("db is connected")
   //initiate db
   const db = client.db(dbName)
   const collection = db.collection(collName)
   //save payload to DB collection
    payload['id'] = 1;
    const updatedValues = {$set: payload}
    await collection.updateOne({id:1}, updatedValues, {upsert:true}) 
    client.close()


   res.send({info: "user profile data updated successfully"})
})

//starts the web server and listens for HTTP request on specified port
//it takes 2 arguments; the port and when to do next
const port = 3000; //localhost 
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});







//HTTP defines the communication between the frontend and the backend
//URL uniform resource locator