const express = require('express');
const router = express.Router();
const ProviderSpecController = require('../controllers/providerSpec');
const providerSpec = new ProviderSpecController()

router.post('/', providerSpec.addSpec);

module.exports = router