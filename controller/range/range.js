const express = require("express");

// Models :
const RangeModel = require("../../model/range");

// Helpers :
const catchAsync = require("../../utils/catchAsync");
const { STATUS_CODE, ERRORS, SUCCESS_MSG } = require("../../constants/index");




const createRange = catchAsync(async (req, res, next) => {
    try {
        let { min, max } = req.body;

        const newRange = new RangeModel(req.body);
        await newRange.save();

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.CREATED, newRange });
    } catch (err) {
        console.log(err);
        res
            .status(STATUS_CODE.SERVER_ERROR)
            .json({ message: ERRORS.PROGRAMMING.SOME_ERROR, err });
    }
});

const setRange = catchAsync(async (req, res, next) => {
    try {
        let { id } = req.params;
        let { min, max } = req.body;

        let result = await RangeModel.findByIdAndUpdate(id, req.body)

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.CREATED });
    } catch (err) {
        console.log(err);
        res
            .status(STATUS_CODE.SERVER_ERROR)
            .json({ message: ERRORS.PROGRAMMING.SOME_ERROR, err });
    }
});

const getRange = catchAsync(async (req, res) => {
    try {
        const result = await RangeModel.find();

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.OPERATION_SUCCESSFULL, result });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.BAD_REQUEST).json({ statusCode: STATUS_CODE.BAD_REQUEST, err })
    }
})

const deleteRange = catchAsync(async (req, res) => {
    try {
        let { id } = req.params;
        const result = await RangeModel.findByIdAndDelete(id);

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.OPERATION_SUCCESSFULL });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.BAD_REQUEST).json({ statusCode: STATUS_CODE.BAD_REQUEST, err })
    }
})


module.exports = { setRange, getRange, createRange, deleteRange };
