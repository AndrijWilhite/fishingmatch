'use strict';


var mongoose = require('mongoose'),
  trip = mongoose.model('makeTrip');

exports.list_all_trips = function(req, res) {
  trip.find({}, function(err, trip) {
    if (err)
      res.send(err);
    res.json(trip);
  });
};

exports.create_a_trip = function(req, res) {
  var new_trip = new trip(req.body);
  new_trip.save(function(err, trip) {
    if (err)
      res.send(err);
    res.json(trip);
  });
};

exports.read_a_trip = function(req, res) {
  trip.findById(req.params.tripId, function(err, trip) {
    if (err)
      res.send(err);
    res.json(trip);
  });
};

exports.update_a_trip = function(req, res) {
  trip.findOneAndUpdate({_id: req.params.tripId}, req.body, {new: true}, function(err, trip) {
    if (err)
      res.send(err);
    res.json(trip);
  });
};

exports.delete_a_trip = function(req, res) {
  trip.remove({
    _id: req.params.tripId
  }, function(err, trip) {
    if (err)
      res.send(err);
    res.json({ message: 'trip successfully deleted' });
  });
};
