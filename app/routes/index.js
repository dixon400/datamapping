const provider = require('./provider');
module.exports = (app) => {
    app.use('/provider', provider)
}