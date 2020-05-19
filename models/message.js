//! Require
const mongoose = require('mongoose')

//* Schema for responding to private message
const responseSchema = new mongoose.Schema({
  text: { type: String, maxlength: 200, required: true },
  user: { type: mongoose.Schema.ObjectId, ref: 'User' }
}, {
  timestamps: true
})

//* Schema for sending private message and starting Message Chain
const messengerSchema = new mongoose.Schema({
  text: { type: String, maxlength: 200, required: true },//* message to send
  user: { type: mongoose.Schema.ObjectId, ref: 'User' },//* Current token. The sender
  owner: { type: mongoose.Schema.ObjectId, ref: 'User' },//* The target Id. Recipient 
  response: [responseSchema]//* Array of chain messages
}, {
  timestamps: true 
})

//! Export
module.exports =
  mongoose.model('Messages', messengerSchema)