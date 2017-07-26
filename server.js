var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;

mongoose = require('mongoose'),
  Trip = require('./hookUpApi/api/models/makeTripModel'),
  bodyParser = require('body-parser');
  
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tripdb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./hookUpApi/api/routes/makeTripRoutes');
routes(app);

app.listen(port);

console.log('hookup list RESTful API server started on: ' + port);

