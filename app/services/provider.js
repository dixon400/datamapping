const ProviderModel = require('../schema/provider');

class ProviderService {
    async addProvider(payload) {

        const provider = new ProviderModel({
            name: payload.name
        })
        return provider.save();
    }
}

module.exports = ProviderService