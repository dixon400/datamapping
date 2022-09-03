const provider = require('./provider');
const providerSpec = require('./providerspec');
module.exports = (app) => {
    app.use('/provider', provider)
    app.use('/spec', providerSpec)
}