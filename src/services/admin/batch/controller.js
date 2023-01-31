import BatchModel from '../../../models/batch.js'
import { APIResponse } from '../../../utils/common.js'
import {ACTIVE} from '../../../utils/constant.js'

export const addBatch = async (req, res) => {
    const { batchId, batchName } = req.body
    const batch = await BatchModel.findOne({ batchId: batchId })

    if (batch) {
        const response = new APIResponse(0, "Batch already exist");
        res.send(response)
    }
    else {
        const doc = new BatchModel({ batchId, batchName, status: ACTIVE });
        await doc.save();
        const response = new APIResponse(1, "Batch Added");
        res.status(201).send(response);

    }
}

export const updateBatch = async (req, res) => {
    let batch = await BatchModel.findById(req.params.id);
    if (!batch) {
        res.status(404).send(new APIResponse(0, `Batch  not found`));
        return;
    }

    const requestBody = req.body;
    await BatchModel.findByIdAndUpdate(req.params.id, requestBody);
    const updatedBatch = await BatchModel.findById(req.params.id);
    const response = new APIResponse(1, "Batch Updated ", updatedBatch);
    res.status(201).send(response);

}

export const deleteBatch = async (req, res) => {
    const batch = await BatchModel.findByIdAndDelete(req.params.id);
    if (!batch) {
        const response = new APIResponse(0, "Batch  not found",);
        res.send(response);
        return;
    }
    const response = new APIResponse(1, "batch deleted",);
    res.status(201).send(response)

}

export const viewBatch = async (req, res) => {
    const batch = await BatchModel.find()
    if (!batch) {
        const response = new APIResponse(0, "No data found",);
        res.send(response);
        return;
    }
    const response = new APIResponse(1, "Data found ", batch);
    res.status(200).send(response);
}
