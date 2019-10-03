module.exports = {
  addToCart: (req, res) => {
    req.session.cart.push(req.body);
    res.status(200).send(req.session.cart);
  },
  getCart: (req, res) => {
    res.status(200).send(req.session.cart);
  }
};
