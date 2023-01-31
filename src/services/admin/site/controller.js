
import { APIResponse } from '../../../utils/common.js';
import siteModel from '../../../models/site.js';
import site from '../../../models/site.js';

export const getData = async (req, res) => {
    const sites = await siteModel.find();
    let response = new APIResponse(0, "Data not found");
    if (sites) {
        response = new APIResponse(1, "Data found", sites);
    }
    res.send(response);
}

export const getActiveSites = async (req, res) => {
    const sites = await siteModel.find({ status: "1" }).sort({ "siteName":1 });
    let response = new APIResponse(0, "Data not found");
    const result = [];
    for (let data of sites) {
        result.push({
            _id: data._id,
            siteName: data.siteName
        })
    }
    if (result) {
        response = new APIResponse(1, "Data found", result);
    }
    res.send(response);
}



export const addData = async (req, res) => {
    const siteName = await siteModel.findOne({ siteName: req.body.siteName });
    if (siteName) {
        let response = new APIResponse(0, "Site is already exists");
        res.send(response);
    } else {
        await siteModel.create(req.body).then(data => {
            res.send(new APIResponse(1, "Data added successfully", data));
        }).catch(err => {
            res.send(new APIResponse(0, "data not added"));
        })
    }
};


export const deleteData = async (req, res) => {
    try {
        await siteModel.findByIdAndDelete({ _id: req.params.id });
        res.send(new APIResponse(1, "Deleted"));
    }
    catch (error) {
        res.send(new APIResponse(0, "Id not found"));
    }
};


export const updateData = async (req, res) => {
    const { siteName, status, longitude, latitude } = req.body;
    const siteData = await siteModel.findOne({ siteName });
    if (!siteData || siteData._id == req.params.id) {
        await siteModel.updateOne({ _id: req.params.id }, {
            $set: {
                siteName: siteName, status: status, longitude: longitude, latitude: latitude
            }
        }).then(result => {
            res.send(new APIResponse(1, 'Site updated successfully', result));
        }).catch(err => {
            res.send(new APIResponse(0, 'Error while updating'))
        })
    }
    else {
        let response = new APIResponse(0, "Site name is already exist.")
        res.send(response);
    }


};
