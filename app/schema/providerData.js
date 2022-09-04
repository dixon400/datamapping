const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const providerDataSchema = new mongoose.Schema({
    providerId: {type: Schema.Types.ObjectId, ref: 'Provider'},
    data: {
        type: Array,
        required: true,
    }

}, { timestamps: true })

module.exports = mongoose.model('ProviderData', providerDataSchema);