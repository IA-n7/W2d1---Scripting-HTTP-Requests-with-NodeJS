var https = require('https');

function getAndPrintHTML (options) {

https.get(options, function (response) {

  var str = "";

  response.setEncoding('utf8');

  response.on('data', function (data) {
    str += data;
  });

  response.on('end', function() {
    console.log(str);
    console.log('End of all data/chunks');
  });

});
}

  // var requestOptions = {
  //   host: 'sytantris.github.io',
  //   path: '/http-examples/step1.html'
  // };


getAndPrintHTML();