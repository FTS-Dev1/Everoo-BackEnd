const express = require("express");

// Models :
const AusstattungModel = require("../../model/ausstattung");
const BeverageModel = require("../../model/beverage");
const CateringModel = require("../../model/catering");
const DekorationModel = require("../../model/dekoration");
const EventmoduleModel = require("../../model/eventmodule");
const HotelmanagementModel = require("../../model/hotelmanagement");
const LocationModel = require("../../model/location");
const PrasenteModel = require("../../model/prasente");
const ShuttleModel = require("../../model/shuttle");
const StaffModel = require("../../model/staff");
const VeranstaltungstechnikModel = require("../../model/veranstaltungstechnik");

const CityModel = require("../../model/city");

// Helpers :
const catchAsync = require("../../utils/catchAsync");
const { STATUS_CODE, ERRORS, SUCCESS_MSG } = require("../../constants/index");
const { uploadFile } = require("../../utils/uploader");





const CreateData = catchAsync(async (req, res, next) => {
    try {
        let { name, services } = req.body;

        let payload = {
            name,
            ...services
        }

        const newData = new CityModel(payload);
        await newData.save();

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.CREATED, newData });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.SERVER_ERROR).json({ message: ERRORS.PROGRAMMING.SOME_ERROR, err });
    }
});


const getData = catchAsync(async (req, res) => {
    try {
        let result = await CityModel.find()

        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.OPERATION_SUCCESSFULL, result });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.BAD_REQUEST).json({ statusCode: STATUS_CODE.BAD_REQUEST, err })
    }
})

const getAllServicesData = catchAsync(async (req, res) => {
    try {
        const Ausstattung = await AusstattungModel.find();
        const Beverage = await BeverageModel.find();
        const Catering = await CateringModel.find();
        const Dekoration = await DekorationModel.find();
        const Eventmodule = await EventmoduleModel.find();
        const Hotelmanagement = await HotelmanagementModel.find();
        const Location = await LocationModel.find();
        const Prasente = await PrasenteModel.find();
        const Shuttle = await ShuttleModel.find();
        const Staff = await StaffModel.find();
        const Veranstaltungstechnik = await VeranstaltungstechnikModel.find();


        let result = {
            Ausstattung,
            Beverage,
            Catering,
            Dekoration,
            Eventmodule,
            Hotelmanagement,
            Location,
            Prasente,
            Shuttle,
            Staff,
            Veranstaltungstechnik
        }


        res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.OPERATION_SUCCESSFULL, result });
    } catch (err) {
        console.log(err);
        res.status(STATUS_CODE.BAD_REQUEST).json({ statusCode: STATUS_CODE.BAD_REQUEST, err })
    }
})


module.exports = { CreateData, getAllServicesData, getData };
