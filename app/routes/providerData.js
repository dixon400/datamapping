const express = require('express');
const router = express.Router();
const ProviderDataController = require('../controllers/providerData');
const providerSpec = new ProviderDataController()

router.post('/', providerSpec.addData);
router.get('/:providerId', providerSpec.fetchData);

module.exports = router