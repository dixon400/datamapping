const ProviderService = require("../services/provider");

class ProviderController {
    async addProvider(req, res) {
        if(!req.body) throw new Error("Please provide a valid name")

        const resp = await new ProviderService().addProvider(req.body);
        if(!resp){
            res.status(400).json("Error storing data")
        }
        return res.status(201).json({message: "Provider created successfully", data: resp})
    }
}

module.exports = ProviderController