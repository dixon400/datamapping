const ProviderDataService = require("../services/providerData");

class ProviderDataController {
    addData = async(req, res) =>{
        if(!req.body) throw new Error("Please provide a valid data")

        const resp = await new ProviderDataService().addData(req.body);
        if(!resp.data) {res.status(400).json({msg:`Failed to fetch data, ${resp.reason}`})}
        return res.status(201).json({message: "Data fields created successfully", data: resp})
    }

    fetchData = async(req, res) => {
        const resp = await new ProviderDataService().fetchData(req.params);
        return res.status(200).json({message: "Data fetched successfully", data: resp})

    }

    fetchAltData = async(req, res) => {
        const providerId = req.params.providerId || (()=> {throw new Error("provide a valid provider ID")})
        const resp = await new ProviderDataService().fetchAltData( providerId, req.query);
        return res.status(200).json({message: "Data fetched successfully", data: resp})
    }
}

module.exports = ProviderDataController