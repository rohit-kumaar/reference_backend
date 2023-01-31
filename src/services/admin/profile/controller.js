import UserModel from "../../../models/user.js"
import { APIResponse } from "../../../utils/common.js";
import { USER_ADMIN } from "../../../utils/constant.js";



export const getProfile = async (req, res) => {
  const id = req.params.id;

  const data = await UserModel.findById(id);
  let response = new APIResponse(0, "data not found")
  if (data && data.role==USER_ADMIN) {
    response = new APIResponse(1, "Data found", data)
  }
  res.send(response);
}

export default getProfile