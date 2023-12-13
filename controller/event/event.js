const express = require("express");

// Models :
const EventModel = require("../../model/event");

// Helpers :
const catchAsync = require("../../utils/catchAsync");
const { STATUS_CODE, ERRORS, SUCCESS_MSG } = require("../../constants/index");
const { uploadFile } = require("../../utils/uploader");





const CreateData = catchAsync(async (req, res, next) => {
    try {
        let { name, cities } = req.body;

        let payload = {
            name,
            cities
        }

        const newData = new EventModel(payload);
        await newData.save();

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.CREATED, newData });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.SERVER_ERROR).json({ message: ERRORS.PROGRAMMING.SOME_ERROR, err });
    }
});

const updateData = catchAsync(async (req, res, next) => {
    try {
        let { id } = req.params;
        let { name, cities } = req.body;

        let payload = {
            name,
            cities
        }

        const result = await EventModel.findByIdAndUpdate(id, payload)
        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.CREATED, result });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.SERVER_ERROR).json({ message: ERRORS.PROGRAMMING.SOME_ERROR, err });
    }
});


const getData = catchAsync(async (req, res) => {
    try {
        let result = await EventModel.find().populate({ path: "cities", populate: "Ausstattung Beverage Catering Dekoration Eventmodule Hotelmanagement Location Prasente Shuttle Staff Veranstaltungstechnik" })

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.OPERATION_SUCCESSFULL, result });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.BAD_REQUEST).json({ statusCode: STATUS_CODE.BAD_REQUEST, err })
    }
})

const deleteData = catchAsync(async (req, res) => {
    try {
        let { id } = req.params;
        let result = await EventModel.findByIdAndDelete(id)

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.OPERATION_SUCCESSFULL });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.BAD_REQUEST).json({ statusCode: STATUS_CODE.BAD_REQUEST, err })
    }
})


module.exports = { CreateData, getData, deleteData, updateData };