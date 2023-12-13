const express = require("express");

// Models :
const PrasenteModel = require("../../model/prasente");

// Helpers :
const catchAsync = require("../../utils/catchAsync");
const { STATUS_CODE, ERRORS, SUCCESS_MSG } = require("../../constants/index");
const { uploadFile } = require("../../utils/uploader");



const CreateData = catchAsync(async (req, res, next) => {
    try {
        let { title, price, description } = req.body;

        if (!req.file) {
            return res.status(STATUS_CODE.BAD_REQUEST).json({ message: ERRORS.REQUIRED.FIELDS_MISSING, field: ["image"] })
        }

        let payload = {
            title,
            price,
            description
        }

        payload["image"] = await uploadFile(req.file, null);

        const newData = new PrasenteModel(payload);
        await newData.save();

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.CREATED, newData });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.SERVER_ERROR).json({ message: ERRORS.PROGRAMMING.SOME_ERROR, err });
    }
});

const UpdateData = catchAsync(async (req, res, next) => {
    try {
        let { id } = req.params;
        let { title, price, description } = req.body;


        let payload = {
            title,
            price,
            description
        }

        if (req.file) {
            payload["image"] = await uploadFile(req.file, null);
        }

        let result = await PrasenteModel.findByIdAndUpdate(id, payload, { new: true })

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.CREATED, result });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.SERVER_ERROR).json({ message: ERRORS.PROGRAMMING.SOME_ERROR, err });
    }
});

const getData = catchAsync(async (req, res) => {
    try {
        const result = await PrasenteModel.find();

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.OPERATION_SUCCESSFULL, result });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.BAD_REQUEST).json({ statusCode: STATUS_CODE.BAD_REQUEST, err })
    }
})

const deleteData = catchAsync(async (req, res) => {
    try {
        let { id } = req.params;
        const result = await PrasenteModel.findByIdAndDelete(id);

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.OPERATION_SUCCESSFULL });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.BAD_REQUEST).json({ statusCode: STATUS_CODE.BAD_REQUEST, err })
    }
})



module.exports = { CreateData, getData, deleteData, UpdateData };
