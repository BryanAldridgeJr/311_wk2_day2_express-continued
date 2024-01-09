const products = require('../data/comments');

const productsController = {
  list: (req, res) => {
    res.json(products);
  },
  show: (req, res) => {
    const product = products.find(product => product._id == req.params.id);
    res.status(200).json(product);
  },
  create: (req, res) => {
    const newProduct = {
      ...req.body,
      _id: products.length + 1
    };

    products.push(newProduct);
    res.json(newProduct);
  },
};

module.exports = productsController;