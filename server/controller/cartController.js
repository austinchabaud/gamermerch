module.exports = {
  addToCart: (req, res) => {
    req.session.cart.push(req.body);
    res.status(200).send(req.session.cart);
  },
  getCart: (req, res) => {
    res.status(200).send(req.session.cart);
  },
  removeFromCart: (req, res) => {
    const { id } = req.params;
    const index = req.session.cart.findIndex(merch => {
      return merch.id === parseInt(id);
    });
    if (index !== -1) {
      req.session.cart.splice(index, 1);
    }
    console.log(id, index);
    res.status(200).send(req.session.cart);
  }
};
