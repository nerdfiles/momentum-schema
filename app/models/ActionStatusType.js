const mongoose = require('mongoose')

const ObjectId =  mongoose.Schema.Types.ObjectId

const actionStatusTypeSchema = new mongoose.Schema({
  name: String
})

/**
 * Exports
 */

const ActionStatusType = mongoose.model('ActionStatusType', actionStatusTypeSchema)

module.exports = ActionStatusType
