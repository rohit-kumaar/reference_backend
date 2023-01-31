import { APIResponse } from "../../../utils/common.js";
import UserModel from "../../../models/user.js";

//add distributor
const addDistributor = async (req, res) => {
  const { name, email, role, password } = req.body;
  const distributor = await UserModel.findOne({ email });
  let response;
  if (distributor) {
    response = new APIResponse(0, "Distributor already exists");
    res.send(response);
  } else {
    const doc = new UserModel({ name, email, role, password });
    await doc.save();
    response = new APIResponse(1, "Distributor added successfully");
    res.send(response);
  }
};

//get  all distributor details
const getDistributorByRole = async (req, res) => {
  const distibutors = await UserModel.find({ role: "Distributor" });
  let response = new APIResponse(0, "No details found");
  if (distibutors) {
    response = new APIResponse(1, "Data found", distibutors);
  }
  res.send(response);
};

//get distributor by Id
const getDistributorById = async (req, res) => {
  const distibutors = await UserModel.findById(req.params.id);
  let response = new APIResponse(0, "No details found for given Id");
  if (distibutors) {
    response = new APIResponse(1, " Distributor by Id", distibutors);
  }
  res.send(response);
};

//update distributor details
const updateDistributor = async (req, res) => {
  const distributors = await UserModel.findById(req.params.id);
  let response = new APIResponse(0, "Distributor not found");
  if (distributors) {
    const requestBody = req.body;
    const updateDistributor = await UserModel.updateOne({ _id: req.params.id }, { $set: requestBody }); //diectlu update the data
    response = new APIResponse(1, "Distributor updated successfully", updateDistributor);
  }
  res.send(response);
};

//delete distributor details
const deleteDistributor = async (req, res) => {
  const distributor = await UserModel.findByIdAndDelete(req.params.id);
  let response = new APIResponse(0, "Distributor not found");
  if (distributor) {
    response = new APIResponse(1, "Distributor deleted");
  }
  res.send(response);
};

export { addDistributor, getDistributorById, getDistributorByRole, updateDistributor, deleteDistributor };
