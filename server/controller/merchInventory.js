module.exports = {
  gamerMerch: (req, res) => {
    const db = req.app.get("db");
    db.gamer_merch().then(merch => res.status(200).send(merch));
  },
  getDetails: (req, res) => {
    const db = req.app.get("db");
    db.details().then(info => res.status(200).send(info));
  }
};
