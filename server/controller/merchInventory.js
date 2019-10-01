module.exports = {
  gamerMerch: (req, res) => {
    const db = req.app.get("db");
    db.gamer_merch().then(merch => res.status(200).send(merch));
  },
  getMerchDetails: (req, res) => {
    const db = req.app.get("db");
    db.details().then(details => res.status(200).send(details));
  }
};
