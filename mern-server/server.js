const express = require('express')
const app = express()
const cors= require('cors')
require('dotenv').config();
const port = process.env.PORT 

//middleware
 app.use(cors());
 app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})
// mongodb configuration

//GmYwHEanaAkDyH0Q
const { MongoClient, ServerApiVersion , ObjectId } = require('mongodb');
const uri = process.env.MONGODB_URI;
 
 // Create a MongoClient with a MongoClientOptions object to set the Stable API version
 const client = new MongoClient(uri, {
   serverApi: {
     version: ServerApiVersion.v1,
     strict: true,
     deprecationErrors: true,
   }
 });
 
 async function run() {
   try {
     // Connect the client to the server	(optional starting in v4.7)
     await client.connect();

    //create a collection of books
    const bookCollection = client.db("BookInventory").collection("books");

    //upload books to the collection
    app.post("/upload-book", async(req, res) => {
          const data = req.body;
          const result = await bookCollection.insertOne(data);
          res.send(result);
    });

    //get all books from the collection
    app.get('all-books', async(req, res) => {
      const books = bookCollection.find();
      const result = await books.toArray();
      res.send(result);
    });

    //update a book in the collection
    app.patch('/book/:id', async(req, res) => {
      const id = req.params.id;
      const updateBookData = req.body;
      const filter = {_id: new ObjectId(id)};
      const options = {upsert: true};

      const updateDoc = {
        $set: {
          ...updateBookData,
        },
      };

      const result = await bookCollection.updateOne(filter, updateDoc, options);
      res.send(result);
    });

    //delete a book from the collection
    app.delete('/book/:id', async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollection.deleteOne(filter);
      res.send(result);
    });

    //fing a single book from the collection
    app.get('/book/:id', async(req, res) => {
      const id = req.params.id;
      const filter = {_id: new ObjectId(id)};
      const result = await bookCollection.findOne(filter);
      res.send(result);
    }
    );
    // app.get('/book/:id', async(req, res) => {
    //   const id = req.params.id;
    //   if (!ObjectId.isValid(id)) {
    //     return res.status(400).send('Invalid book ID');
    //   }
    //   const filter = {_id: new ObjectId(id)};
    //   const result = await bookCollection.findOne(filter);
    //   if (!result) {
    //     return res.status(404).send('Book not found');
    //   }
    //   res.send(result);
    // });
    

    //find by category

    app.get('/all-books', async(req, res) => {
      let query = {};
      if(req.query?.category){
        query = {category: req.query.category};
      }

      const result = await bookCollection.find(query).toArray();
      res.send(result);
    });

     // Send a ping to confirm a successful connection
     await client.db("admin").command({ ping: 1 });
     console.log("Pinged your deployment. You successfully connected to MongoDB!");
   } finally {
     // the client will close when you finish/error
    //  await client.close();
   }
 }
 run().catch(console.dir);
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})