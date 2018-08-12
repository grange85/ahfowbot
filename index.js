const fs = require('fs');
const twit = require('twit');


var cred = JSON.parse(fs.readFileSync('credentials.json'));
//console.log(cred.consumer_key);

var t = new twit({
    consumer_key:         process.env.TWITTER_CONSUMER_KEY || cred.consumer_key,
    consumer_secret:      process.env.TWITTER_CONSUMER_SECRET || cred.consumer_secret,
    access_token:         process.env.TWITTER_ACCESS_TOKEN || cred.access_token,
    access_token_secret:  process.env.TWITTER_ACCESS_TOKEN_SECRET || cred.access_token_secret
});

var users = ['12265892', '15354314', '521522434'];
var ahfowbot = '932023965522059269';

var stream = t.stream('statuses/filter', {follow: users});

stream.on('tweet', function(tweet){
//  console.log(tweet);
});

