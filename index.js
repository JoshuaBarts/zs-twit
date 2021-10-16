console.log("Bot is working")

var Twit = require('twit')
var config = require('./config')
var T = new Twit(config)

console.log(config)

const axios = require('axios')


//tweetIt('test');

//animechan free- api
var url = 'https://animechan.vercel.app/api/random';



setInterval(tweetIt, 1000*60*60)

function tweetIt(txt) {
    //tweet

    axios(url)
    .then(response => {
        var data = response.data
        console.log(data)
        var anime = data.anime
        var character = data.character
        var quote = data.quote
        var txt = "From: " + anime + "\n\nCharacter: " + character + "\n '" + quote + "'";

        var num = Math.floor(Math.random()*100)
        var tweet = {
            status: txt
        }

        T.post('statuses/update', tweet, tweeted)

        function tweeted(err, data, response) {
            if (err) {
                console.log('Something went wrong.')
                console.log(data)
                
            }
            else {
                console.log('Tweet worked.')
            }
        }
    }) 
}
