const express = require('express');
const router = express.Router();
const ProviderController = require('../controllers/provider');
const provider = new ProviderController()

router.post('/', provider.addProvider);

module.exports = router