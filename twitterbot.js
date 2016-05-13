
module.exports = {
    init: function() {
        var self = this;
        var request = require('request');

        setInterval(function() {
            var currentdate = new Date();
            var re = /<strong><i>(.*)<\/i><\/strong>/;
            var datetime = "Last Sync: " + currentdate.getDay() + "/"+currentdate.getMonth()
            + "/" + currentdate.getFullYear() + " @ "
            + currentdate.getHours() + ":"
            + currentdate.getMinutes() + ":" + currentdate.getSeconds();

            that = self;
            request('http://www.randominsults.net', function (error, response, body) {
                if (!error && response.statusCode == 200) {
                    var matches = body.match(re);
                    if (typeof matches[1] != 'undefined') {
                        console.log(datetime,"sending tweet... ", matches[1]);
                        that.sendTweet(matches[1]);
                    }
                }
            });
        }, 90000 ); // 25 hours
    },

    getTwitterClient: function() {
        var Twitter = require('twitter');
        var twitter_creds = require("./config.js");
        var twitter_client = new Twitter(twitter_creds);

        return twitter_client;
    },

    sendTweet: function(text) {
        twitter_client = this.getTwitterClient();
        twitter_client.post('statuses/update', {status: text},  function(error, tweet, response) {
            if(error) throw error;
        });
    },

}

