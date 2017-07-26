'use strict';
module.exports = function(app) {
  var makeTrip = require('../controller/makeTripController');


  // Make Trip Routes
  app.route('/trip')
    .get(makeTrip.list_all_trips)
    .post(makeTrip.create_a_trip);


  app.route('/makeTrip/:makeTripId')
    .get(makeTrip.read_a_trip)
    .put(makeTrip.update_a_trip)
    .delete(makeTrip.delete_a_trip);
};
