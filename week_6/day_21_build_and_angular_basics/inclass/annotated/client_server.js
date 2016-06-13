//you need express itself to get a property from it
const express = require('express');
const app = express();
//Static is the one of the only pieces of connect middleware that
//comes with express. It takes an argument of a directory and makes
//all the files in it available to the client. By default it looks
//for a file named index.html and serves it to GET '/'
app.use(express.static(__dirname + '/build'));

//make sure to listen on a different port than any api server you may
//have running locally
app.listen(8080, () => console.log('server up on 8080'));
