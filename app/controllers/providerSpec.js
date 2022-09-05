const ProviderSpecService = require("../services/providerSpec");

class ProviderSpecController {
     addSpec = async(req, res) =>{
        if(!req.body) throw new Error("Please provide a valid data")

        const resp = await new ProviderSpecService().createSpec(req.body);
        if(!resp){
            res.status(400).json("Error storing data")
        }
        return res.status(201).json({message: "Data fields created successfully", data: resp})
    }
}

module.exports = ProviderSpecController