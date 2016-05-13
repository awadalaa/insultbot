## InsultBot
This is a twitter bot that sends an insult tweet once in a while. I looked for a compliment api but I could only find insult apis. So 

## Setup Instructions
1. get a twitter account that you dont mind getting banned.
2. create a [twitter app](https://dev.twitter.com/apps/new) and get credentials
3. Edit the file config.js using your twitter credentials

## After you have done so, install `insultbot` run:
    cd \path\to\insultbot
    npm install
    npm start

## Edit this line in server.js to run on a different port (optional):
    var port     = process.env.PORT || 3000;
