const provider = require('./provider');
const providerSpec = require('./providerspec');
const providerData = require('./providerData');
module.exports = (app) => {
    app.use('/provider', provider)
    app.use('/spec', providerSpec)
    app.use('/data', providerData)
}