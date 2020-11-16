//! Consts
const port = process.env.PORT || 8000
const dbURI = process.env.MONGODB_URI || 'mongodb+srv://bengaboy:Gbenga90@kebb-clothes.tone1.mongodb.net/kebb-clothes?retryWrites=true&w=majority'
const secret = process.env.SECRET || 'bengasmells'



//! Exports
module.exports = {
  dbURI,
  port,
  secret
}