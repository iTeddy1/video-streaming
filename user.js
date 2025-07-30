const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
   name: { type: String, required: true, unique: true },
   donatedMoney: { type: Number, default: 0 },
   gifts: {
      type: Array, default: [
         {
            name: 'flower',
            quantity: 1
         },
         {
            name: 'heart',
            quantity: 1
         },
         {
            name: 'star',
            quantity: 1
         }
      ]
   },
   isActive: { type: Boolean, default: true },
   createdAt: { type: Date, default: Date.now },
   updatedAt: { type: Date, default: Date.now }
});


module.exports = mongoose.model('User', userSchema);
