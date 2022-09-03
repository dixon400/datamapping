const ProviderSpec = require('../schema/providerSpec');
const Provider = require('../schema/provider')
class ProviderSpecService {
    createSpec = async (payload) => {
        try {
            const {providerId, fields} = payload;
            const provider = await Provider.findById(providerId);
            console.log({provider});

            if (!provider) {
                throw new Error("You are not allowed")
            }
            const providerSpec = new ProviderSpec({
                providerId, fields
            })
            return providerSpec.save()
        } catch (error) {
            console.log({error});
            return error
        }
    }
}
module.exports = ProviderSpecService;