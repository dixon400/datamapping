const Provider = require('../schema/provider')
const ProviderSpec = require('../schema/providerSpec')
const ProviderData = require('../schema/providerData');
const { fetchSpec } = require('../helper/repository');
class ProviderDataService {
    addData = async (payload) => {
        try {
            const {providerId, data} = payload;
            const provider = await Provider.findById(providerId);

            if (!provider) {
                throw new Error("You are not allowed")
            }
            const spec = await fetchSpec(providerId);
            let arrayToSave = []
            data.forEach(async(val)=>{
                let objToSave = {}
                let objKey = Object.keys(val)
                for(let i= 0; i< objKey.length; i++ ){
                    if(spec.includes(objKey[i])){
                        objToSave[objKey[i]] = typeof(val[objKey[i]]) === 'string'? val[objKey[i]].toLowerCase() : val[objKey[i]];
                    }
                }
             arrayToSave.push(objToSave);
            })
            const providerData = new ProviderData({
                providerId, data: arrayToSave
            })
            return providerData.save()
        } catch (error) {
            return error;
        }
    }
    
    fetchData = async (payload) => {
        return ProviderData.find({providerId: payload.providerId});
    }

    fetchAltData = async(providerId, payload) => {
        try {
            const spec =await (ProviderSpec.find({providerId}));
            const fields = await spec[0].fields;
            let q = {};
            if(payload){
                Object.entries(payload).forEach(([k, v])=>{
                    if(fields.includes(k)){
                       let check = v.split(':')
                       switch (check[0]) {
                        case 'eqc':
                            q[k] = {$regex: `${check[1]}`, $options: 'i'}
                            break;
                        case 'eq':
                            q[k] = {'$eq': parseInt(check[1])} 
                            break;
                        case 'lt':
                            q[k] = {'$lt':parseInt(check[1])}
                            break;
                        case 'gt':
                            q[k] = {'$gt': parseInt(check[1])}
                            break;
                        default:
                            break;
                       }
                    }
                });
               let data = await ProviderData.find({providerId}, {"data": {$elemMatch:q}});
               return data
            }
        } catch (error) {
           return error
        }
    }
}
module.exports = ProviderDataService;