const request = require("request");
const API_KEY = process.env.GOOGLEPLACES_API_KEY;


const stores = [
  "decathlon+wagram+paris"
  // "Decat Bordeaux Ste Catherine (Decathlon), 130 Rue Sainte-Catherine, 33000 Bordeaux"
  // "Decathlon Marseille Bonneveine, Chemin du Roi d'Espagne, 13009 Marseille",
  // "Decathlon Strasbourg Geispolsheim, 5 Rue du Fort, 67118 Geispolsheim",
  // "Decathlon Wagram Paris, 26 Avenue de Wagram, 75008 Paris",
  // "Decathlon Lorient, Rue Colonel le Barillec, 56100 Lorient",
  // "Decathlon, 4 Boulevard de Mons, 59650 Villeneuve-d'Ascq"
];

function forecastInventoryByWeather(stores){
  return request(
    {
      url: `https://maps.googleapis.com/maps/api/place/textsearch/xml?query=${stores}&key=${API_KEY}`,
      method: "GET"
    }, function(error, response, result){
      console.log(error);
      console.log(result);
      return result;
    }
  );
}

// curl -X GET "https://maps.googleapis.com/maps/api/place/textsearch/xml?query=decathlon+wagram&key=AIzaSyAESyKygBT9zQquYKduaeRsyqHo1EFi6Zc"
