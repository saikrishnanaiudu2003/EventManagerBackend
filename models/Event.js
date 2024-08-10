const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    image: {
        type: String, // URL to the event image
    },
    price: {
        type: Number,
        required: true,
    },
    speaker: {
        type: String,
        required: true,
    },
    seats: {
        type: Number,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' } // Ensure this field is present

});

module.exports = mongoose.model('Event', eventSchema);
