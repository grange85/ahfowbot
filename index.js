const fs = require('fs');
const twit = require('twit');
const readline = require('readline');
const {google} = require('googleapis');

console.log(isHeroku());
console.log(process.env.NODE);
if (!isHeroku()){
  var cred = JSON.parse(fs.readFileSync('credentials.json'));
  console.log(cred.twitter.consumer_key);
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


function isHeroku()
{
  return process.env.NODE && ~process.env.NODE.indexOf("heroku") ? true : false;
}
