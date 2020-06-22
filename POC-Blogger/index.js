/*
Suchen und lesen von Blogeinträgen nach dem Label und extrahieren der Image Urls
*/
const https = require('https');

https.get('https://www.googleapis.com/blogger/v3/blogs/645477939881106143/posts/search?q=label:TFP&key=AIzaSyD3h5-cgCmihqtpHSSQpOsob71RPWoa0DY', (resp) => {
    let data = '';

    resp.on('data', (chunk) => {
        data += chunk;
    });

    resp.on('end', () => {
        const findImageLinks = /(href..)\b(https?:\/\/\S+(?:png|jpe?g|gif)\S*)\b/g;
        const selectRegexGroup = 2;
        const postPrecessImageUrl = str => str.replace("s1600", "$size");  //sxxxx erstellt Bilder bestimmter größer - s1600 1600px breite
        var result = [];
        JSON.parse(data).items.forEach(element => result = result.concat(getMatches(element.content, findImageLinks, selectRegexGroup, postPrecessImageUrl)));
        console.log(result);
    });

}).on("error", (err) => {
    console.log("Error: " + err.message);
});


function getMatches(string, regex, index = 1, fn = str => str) {
    var matches = [];
    var match;
    while (match = regex.exec(string)) {
        matches.push(fn(match[index]));
    }
    return matches;
}