import UserModel from "../../../models/user.js";
import { APIResponse } from "../../../utils/common.js";
import { USER_CONTRACTOR } from "../../../utils/constant.js";

export const getProfile = async (req, res) => {
  const id = req.params.id;

  const data = await UserModel.findById(id);
  let response = new APIResponse(0, "Data is not defined")   
  if (data && data.role==USER_CONTRACTOR) {
    response = new APIResponse(1, "Data found", data)
  }
  res.send(response);
}
export default getProfile; 
