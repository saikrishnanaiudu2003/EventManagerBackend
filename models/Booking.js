const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
    event: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Event',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    bookingTime: {
        type: Date,
        default: Date.now // Automatically sets the booking time to the current date and time
    }
});

// Virtual field to get the user's name and email
bookingSchema.virtual('username').get(function() {
    return this.user ? this.user.name : '';
});

bookingSchema.virtual('email').get(function() {
    return this.user ? this.user.email : '';
});

// Virtual field to get the event's title
bookingSchema.virtual('eventTitle').get(function() {
    return this.event ? this.event.title : '';
});

const Booking = mongoose.model('Booking', bookingSchema);

module.exports = Booking;
