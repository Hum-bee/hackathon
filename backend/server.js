const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
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
      if (product instanceof Error) {
        console.error(product);
        res.status(500).end();
      } else if (!product) {
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
