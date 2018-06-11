var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };

https.get(requestOptions, function (response) {

  var str = "";

  response.setEncoding('utf8');

  response.on('data', function (data) {
    str += data;
  });

  response.on('end', function() {
    console.log('End of all data/chunks');
  });

});
}

