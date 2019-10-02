module.exports = {
  getOne: (req, res) => {
    const db = req.app.get("db");
    const { id } = req.params;

    db.get_one(parseInt(id))
      .then(merch => res.status(200).send(merch))
      .catch(err => {
        res.status(500).send({
          errorMessage: "Oops! Something went wrong."
        });
        console.log(err);
      });
  }
};
