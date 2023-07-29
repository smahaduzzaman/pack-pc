const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri =
//   "mongodb+srv://packpc:SAim654oTswoQaIk@cluster0.fceds.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run(req, res) {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    console.log("Database Connection Successful");

    const productsCollection = client.db("packpc").collection("products");
    // create a route to get all products
    if (req.method === "GET") {
      const products = await productsCollection.find({}).toArray();
      res.send().json({
        status: "success",
        message: "Products fetched successfully",
        data: products,
      });
    }
    // create a route to get a single product
    if (req.method === "GET") {
      const product = await productsCollection.findOne({ _id: req.query.id });
      res.send().json({
        status: "success",
        message: "Product fetched successfully",
        data: product,
      });
    }
  } catch (err) {
    res.send().json({
      status: "error",
      message: "Error fetching products",
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}

export default run;
