const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
let { PythonShell } = require("python-shell");
var dao = require("./actions/api");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// server start-up
const port = 5000;
console.log(
  "Open a browser to http://localhost:" + port + " to view the application"
);
app.listen(port);

app.get("/products", (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 4;
  const offset = (page - 1) * limit;
  const searchTerm = req.query.searchTerm || "";
  const filter = req.query.filter || "";

  dao.findAllProducts(searchTerm, filter, (products) => {
    if (!products) {
      res.status(404).end();
    } else {
      const paginatedProducts = products.slice(offset, offset + limit);
      res.send(paginatedProducts);
    }
  });
});

app.get("/products/:id", (req, res) => {
  let id = req.params.id;
  dao.findProduct(id, (product) => {
    //console.log(product);
    if (!product) {
      res.status(404).end();
    } else {
      res.send(product);
    }
  });
});

app.get("/randomProducts", (req, res) => {
  dao.findProductRandom((products) => {
    if (!products) {
      res.status(404).end();
    } else {
      res.send(products);
    }
  });
});

app.get("/products/:id/:wid", (req, res) => {
  let id = req.params.id;
  let wid = req.params.wid;
  dao.findSimilarProducts(id, wid, (products) => {
    //console.log(product);
    if (!products) {
      res.status(404).end();
    } else {
      res.send(products);
    }
  });
});

app.get("/recommended", (req, res, next) => {
  let pyshell = new PythonShell("./model/python_test.py");

  // sends a message to the Python script via stdin
  pyshell.send("hello");

  pyshell.on("message", function (message) {
    // received a message sent from the Python script (a simple "print" statement)
    console.log(message);
    res.send(message.toString());
  });

  // end the input stream and allow the process to exit
  pyshell.end(function (err, code, signal) {
    if (err) throw err;
    console.log("The exit code was: " + code);
    console.log("The exit signal was: " + signal);
    console.log("finished");
  });
});
