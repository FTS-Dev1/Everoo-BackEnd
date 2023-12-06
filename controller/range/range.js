const express = require("express");

// Models :
const RangeModel = require("../../model/range");

// Helpers :
const catchAsync = require("../../utils/catchAsync");
const { STATUS_CODE, ERRORS, SUCCESS_MSG } = require("../../constants/index");




const setRange = catchAsync(async (req, res, next) => {
    try {
        let { min, max } = req.body;

        if (!email) {
            res
                .status(STATUS_CODE.BAD_REQUEST)
                .json({ message: "Email is required" });
            return;
        }

        const isExist = await RangeModel.findOne();
        if (isExist) {
            const updateRange = await RangeModel.findByIdAndUpdate(isExist?._id, { min, max }, { new: true })
            res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.UPDATE , updateRange });
            return;
        }

        const newRange = new RangeModel(request.body);
        await newRange.save();

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.CREATED, newRange });
    } catch (err) {
        console.log(err);
        res
            .status(STATUS_CODE.SERVER_ERROR)
            .json({ message: ERRORS.PROGRAMMING.SOME_ERROR, err });
    }
});

const getRange = catchAsync(async (req, res) => {
    try {
        const result = await RangeModel.findOne();

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.OPERATION_SUCCESSFULL, result });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.BAD_REQUEST).json({ statusCode: STATUS_CODE.BAD_REQUEST, err })
    }
})


module.exports = { setRange, getRange };
