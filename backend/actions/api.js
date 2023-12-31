const mongodb = require("mongodb"); // mongo client library
const { MongoClient, ObjectId } = require("mongodb");

const url = "mongodb://localhost:27017";
const dbName = "onlinestore";

let db;

async function startup() {
  try {
    let client = new MongoClient(url);
    await client.connect();
    db = client.db(dbName);
    console.log("Connected to database");
  } catch (err) {
    console.log(err);
  }
}
startup();

module.exports = {
  // retrieve all products
  findAllProducts: function (searchTerm, filter, callback) {
    let collection = db.collection("products");

    let query = {};

    if (searchTerm) {
      query.PRODUCT_NAME = { $regex: new RegExp(searchTerm, "i") };
    }

    if (filter) {
      query.CATEGORY_NAME = filter;
    }

    let dataPromise = collection.find(query).toArray();
    dataPromise.then((products) => callback(products));
  },

  // retrieve one product
  findProduct: function (id, callback) {
    let collection = db.collection("products");
    let dataPromise = collection.findOne({ _id: new ObjectId(id) });
    dataPromise.then((product) => callback(product));
  },
  
    // retrieve random products
  findProductRandom: function (callback) {
    let collection = db.collection("products");
    let dataPromise = collection
      .aggregate([{ $sample: { size: 10 } }])
      .toArray();
    dataPromise.then((product) => callback(product));
  },

  // create one order
  createOrder: async function (order, callback) {
    let collection = db.collection("orders");

    try {
      const result = await collection.insertOne(order);
      callback(null, result.insertedId);
    } catch (err) {
      callback(err);
    }
  }

};
