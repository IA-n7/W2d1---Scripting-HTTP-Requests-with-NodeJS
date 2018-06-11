var https = require('https');

function getAndPrintHTML () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions, function (response) {

  response.setEncoding('utf8');

  response.on('data', function (data) {
    console.log("All the data: " + data);
  });

  response.on('end', function() {
    console.log('End of all data/chunks');
  });

});
}


console.log(getAndPrintHTMLChunks());