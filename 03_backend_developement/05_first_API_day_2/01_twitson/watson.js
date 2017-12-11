const request = require("request");

const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const url = process.env.WATSON_URL;

const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

const text = "My pride, my ego, my needs, and my selfish ways. Caused a good strong woman like you to walk out my life. Now I never, never get to clean up the mess I made. And it haunts me every time I close my eyes";
const uri = encodeURI(url + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);

request(
  {
    url: uri,
    headers: { "Authorization": auth }
  },
  function (error, response, body) {
    if (error) {
      console.log(error);
    } else {
      const analyze = JSON.parse(body);
      console.log(`analysis of the song : ${analyze.emotion.document.emotion}`);
    }
  }
);
