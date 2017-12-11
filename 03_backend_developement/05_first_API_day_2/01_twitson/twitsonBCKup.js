const request = require("request");
const oauth = require("OAuth");

const OAuth = new oauth.OAuth(
  process.env.TWITTER_REQUEST_URL,
  process.env.TWITTER_ACCESS_URL,
  process.env.TWITTER_KEY,
  process.env.TWITTER_SECRET,
  "1.0A", null, "HMAC-SHA1");

const url = "https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=";
const userNameTwitter = "ChattamMaxime";

// Again, replace string by your credentials.
OAuth.get(url + userNameTwitter, process.env.TWITTER_ACCESS_TOKEN, process.env.TWITTER_ACCESS_SECRET, function (error, data) {
  // Do something with data...
  if (error) {
    console.log(error);
  } else {
    const text = JSON.parse(data).map(function (tweet) {
      return tweet.text;
    });
    console.log(text);
  }
});

const username = process.env.WATSON_USERNAME;
const password = process.env.WATSON_KEY;
const watsonUrl = process.env.WATSON_URL;

const auth = "Basic " + new Buffer(username + ":" + password).toString("base64");

const text = "My pride, my ego, my needs, and my selfish ways. Caused a good strong woman like you to walk out my life. Now I never, never get to clean up the mess I made. And it haunts me every time I close my eyes";
const uri = encodeURI(watsonUrl + "/v1/analyze?version=2017-02-27&features=sentiment,emotion&language=en&text=" + text);

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
      console.log(analyze.emotion.document.emotion);
    }
  }
);
