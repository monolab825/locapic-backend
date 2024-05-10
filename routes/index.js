var express = require("express");
var router = express.Router();

require("../models/connection");
const Place = require("../models/places");

router.post("/places", (req, res) => {
  const { nickname, name, latitude, longitude } = req.body;
  const newPlace = new Place({ nickname, name, latitude, longitude });

  newPlace.save().then(() => {
    res.json({ result: true });
  });
});

router.get("/places/:nickname", (req, res) => {
  Place.find({ nickname: req.params.nickname }).then((data) =>
    res.json({ result: true, places: data })
  );
});

router.delete("/places", (req, res) => {
  const { nickname, name } = req.body;
  Place.deleteOne({ nickname, name }).then(() => {
    res.json({ result: true });
  });
});
// Sans destructuration:
// router.delete("/places", (req, res) => {
//   Place.deleteOne({ nickname: req.body.nickname, name: req.body.name }).then(
//     () => {
//       res.json({ result: true });
//     }
//   );
// });

module.exports = router;
