var express = require('express');

var app = express.createServer(express.logger());

var buffer = fs.readFileSync(index.html);
var buffer2 = buf.toString(buffer);

app.get('/', function(request, response) {
   response.send(buffer2);
   //response.send('Hello World3!');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
