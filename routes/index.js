var express = require('express');
var router = express.Router();

var lunchPlaces = ["kreikkalaista Sinisessä Paprikassa",
    "nepalilaista Mangalissa",
    "keittolounasta Salottassa",
    "kiinalaista buffaaa Shia Qua Shia Leissa",
    "nuudelia FitWokissa",
    "lounasta Vohvelihetkessä"
]


function randomLunch()  {
  return lunchPlaces[Math.floor(Math.random() * lunchPlaces.length)]
}

router.get('/', function(req, res, next) {
  res.send("Tänään syödään " + randomLunch())
});



module.exports = router;


