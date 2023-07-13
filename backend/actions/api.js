const mongodb = require("mongodb"); // mongo client library
const { MongoClient } = require("mongodb");

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

  // retrieve one film
  findProduct: function (id, callback) {
    let collection = db.collection("products");
    let dataPromise = collection.findOne({ PRODUCT_ID: +id });
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
};
