const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const providerSpecSchema = new mongoose.Schema({
    providerId: {type: Schema.Types.ObjectId, ref: 'Provider'},
    fields: {
        type: Array,
        required: true,
    }

}, { timestamps: true })

module.exports = mongoose.model('ProviderSpec', providerSpecSchema);