const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true }, // New field for the user's name
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['admin', 'organizer', 'user'], required: true }
});



module.exports = mongoose.model('User', userSchema);
