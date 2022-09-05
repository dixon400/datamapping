const Provider = require('../schema/provider')
const ProviderSpec = require('../schema/providerSpec')
const ProviderData = require('../schema/providerData');

exports.fetchSpec = async (providerId) => {
    const spec = await (ProviderSpec.find({providerId}));
    return spec[0].fields;

}
