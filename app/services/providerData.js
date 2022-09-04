const ProviderData = require('../schema/providerData');
const Provider = require('../schema/provider')
class ProviderDataService {
    addData = async (payload) => {
        try {
            const {providerId, data} = payload;
            const provider = await Provider.findById(providerId);
            console.log({provider});

            if (!provider) {
                throw new Error("You are not allowed")
            }
            const providerData = new ProviderData({
                providerId, data
            })
            return providerData.save()
        } catch (error) {
            console.log({error});
            return error
        }
    }
    fetchData = async (payload) => {
        return ProviderData.find({id: payload.providerId})
    }
}
module.exports = ProviderDataService;