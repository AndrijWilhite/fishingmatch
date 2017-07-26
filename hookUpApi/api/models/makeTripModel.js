
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var makeTripSchema = new Schema({
  firstName: {
    type: String,
    Required: 'Kindly enter the first name'
  },

  lastName: {
    type: String,
    Required: 'Kindly enter the last name'
  },

  boatType: {
    type: String,
    Required: 'Kindly enter the last name'
  },

  boatLength: {
    type: Number,
    Required: 'Kindly enter the last name'
  },

  alcohol: {
    type: Boolean,
    Required: 'Kindly enter the last name'
  },

  smoking: {
    type: Boolean,
    Required: 'Kindly enter the last name'
  },

launchDate: {
    type: Date,
    default: Date.now
  },  

  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['pending', 'ongoing', 'completed']
    }],
    default: ['pending']
  }
});

module.exports = mongoose.model('makeTrip', makeTripSchema);