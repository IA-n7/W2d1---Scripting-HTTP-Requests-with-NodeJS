var https = require('https');


function getHTML (options, callback) {


  var str = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      str += data;
    });

    response.on('end', function() {
      callback(str);
      console.log('End of all data/chunks');
    });

  });

}

  function printHTML (html) {
  console.log(html);
}

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step1.html'
  };
