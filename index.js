var fs = require('fs');
var Twit = require('twit');
//var cred = JSON.parse(fs.readFileSync('credentials.json'));
//console.log(cred.consumer_key);

var T = new Twit({
    consumer_key:         process.env.TWITTER_CONSUMER_KEY,
    consumer_secret:      process.env.TWITTER_CONSUMER_SECRET,
    access_token:         process.env.TWITTER_ACCESS_TOKEN,
    access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET
});

var users = ['12265892', '15354314', '521522434'];
var ahfowbot = '932023965522059269';

var stream = T.stream('statuses/filter', {follow: users});

stream.on('tweet', function(tweet){
  if (users.indexOf(tweet.user.id_str) > -1) {
    console.log(tweet.user.name + ' ' + tweet.text);
  }
});
