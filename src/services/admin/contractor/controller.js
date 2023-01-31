import { APIResponse } from "../../../utils/common.js";
import UserModel from "../../../models/user.js";
import cylinderTrackingModel from "../../../models/cylinderTraking.js";

//add contractor and add contractorand distributor by admin
const addContractor = async (req, res) => {
    const { name, email, role, password ,distributorId} = req.body;
    const contractor = await UserModel.findOne({ email })
    let response;
    if (contractor) {
        response = new APIResponse(0, "Contractor already exists");
        res.send(response);
    }
    else {
        const doc = new UserModel({
            name,
            email,
            role,
            password
        })
        const responseData = await doc.save();
        await new cylinderTrackingModel ({
            contractorId: responseData._id,
            distributorId,
        }).save();
        response = new APIResponse(1, "Contractor added successfully");
        res.send(response);

    }
}


//get  all contractor details

const getContractorsByRole = async (req, res) => {

    const contractors = await UserModel.find({ "role": "Contractor" })
    let response;
    if (!contractors) {
        response = new APIResponse(0, "No details found");
    }
    else {
        response = new APIResponse(1, "Data found", contractors);
        // res.send(response);
    }
    res.send(response);
}

//get distributor by Id
const getContractorById = async (req, res) => {

    const contractor = await UserModel.findById(req.params.id)
    // console.log(distibutors);
    console.log('get contractor called');
    let response;
    if (!contractor) {
        response = new APIResponse(0, "No details found for given Id");
    }
    else {
        response = new APIResponse(1, " Contractor by Id", contractor);
    }
    res.send(response);
}


//update distributor details

const updateContractor = async (req, res) => {

    const contractor = await UserModel.findById(req.params.id);
    let response;
    console.log('update called');
    if (!contractor) {
        // res.status(404).send(`Batch  not found`);
        response = new APIResponse(0, "No details found")
        res.send(response);
        return;
    }
    const requestBody = req.body;
    console.log(requestBody);
    const updateContractor = await UserModel.updateOne({ _id: req.params.id }, { $set: requestBody });//diectlu update the data

    response = new APIResponse(1, "Contractor updated successfully", updateContractor);
    res.send(response);
}

//delete contractor details
const deleteContractor = async (req, res) => {
    const contractor = await UserModel.findByIdAndDelete(req.params.id);
    let response;
    if (!contractor) {
        response = new APIResponse(0, "No details found");
        res.send(response);
        return;
    }
    response = new APIResponse(1, "Contractor deleted successfully");
    res.send(response);
}

// export { addDistributor, getDistributorById, getDistributorByRole, updateDistributor, deleteDistributor };
export { addContractor, getContractorsByRole, getContractorById, updateContractor, deleteContractor };
