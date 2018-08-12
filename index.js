const fs = require('fs');
const twit = require('twit');
const readline = require('readline');
const {google} = require('googleapis');

if (process.env.HEROKU !== true){
  var cred = JSON.parse(fs.readFileSync('credentials.json'));
}

var t = new twit({
    consumer_key:         process.env.TWITTER_CONSUMER_KEY || cred.twitter.consumer_key,
    consumer_secret:      process.env.TWITTER_CONSUMER_SECRET || cred.twitter.consumer_secret,
    access_token:         process.env.TWITTER_ACCESS_TOKEN || cred.twitter.access_token,
    access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET || cred.twitter.access_token_secret
});

var users = ['12265892', '15354314', '521522434'];
var keywords = ['ahfow', '@ahfow', 'ahfowbot', '@ahfowbot']
var ahfowbot = '932023965522059269';

const stream = t.stream('statuses/filter', {track: keywords});

stream.on('tweet', function(tweet){
 t.post('favorites/create', { id: tweet.id_str }, function (err, data, response) {
            console.log(data)
          });
});

