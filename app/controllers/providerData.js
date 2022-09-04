const ProviderDataService = require("../services/providerData");

class ProviderDataController {
    addData = async(req, res) =>{
        if(!req.body) throw new Error("Please provide a valid data")

        const resp = await new ProviderDataService().addData(req.body);
        console.log({resp});
        if(!resp){
            res.status(400).json("Error storing data")
        }
        return res.status(201).json({message: "Data fields created successfully", data: resp})
    }

    fetchData = async(req, res) => {
        console.log(req.params);
        const resp = await new ProviderDataService().fetchData(req.params);
        return res.status(200).json({message: "Data fetched successfully", data: resp})

    }
}

module.exports = ProviderDataController