// ./app/models/Transmedia.js
/**
 * @jsdoc model
 * @name MomentumSchema.model:Transmedia
 * @description Are signatures superstrings? Or more broadly, is a trace or
 * gesture within timeless space generated within a Hilbert lattice such that
 * its shape is nature itself?
 */
const mongoose = require('mongoose')

const ObjectId = mongoose.Schema.Types.ObjectId

const transmediaSchema = new mongoose.Schema({
  account: {
    type: ObjectId,
    ref: 'User',
    required: true
  },
  momentum: [{
    _id: false,
    event: {
      type: ObjectId,
      ref: 'Action',
      required: true
    },
    mass: {
      type: ObjectId,
      ref: 'Balance',
      required: true
    },
    impulse: {
      type: ObjectId,
      ref: 'Impulse',
      required: true
    }
  }],
  fromHash: {
    type: String,
    unique: true,
    required: true
  },
  untilHash: {
    type: String,
    unique: true,
    required: true
  },
  recordFromHash: {
    type: String,
    unique: true,
    required: true
  },
  recordUntilHash: {
    type: String,
    unique: true,
    required: true
  },
  nonce: {
    type: String,
    unique: true,
    required: true
  }
}, {
  timestamps: true,
  id: true
})

const Transmedia = mongoose.model('Transmedia', transmediaSchema)


/**
 * Exports
 */

module.exports = Transmedia

