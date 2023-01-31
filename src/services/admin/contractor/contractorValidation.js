import { check, validationResult } from 'express-validator';
import { APIResponse } from "../../../utils/common.js"

export const validationRules = [
    check("name").notEmpty().withMessage("Name is required"),
    check("email").isEmail().withMessage("Valid Email required"),
    check("role").notEmpty().withMessage("Role is required"),
    check("password")
        .isLength({ min: 6 })
        .withMessage("Password must be at least 6 character long"),
];

export const validationCheck = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.length) {
        res.send(new APIResponse(0, "Error", errors));
    } else {
        next();
    }
}
