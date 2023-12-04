const express = require("express");

// Models :
const OrderModel = require("../../model/orders");

// Helpers :
const jwt = require("../../utils/jwt");
const bycrypt = require("../../utils/bycrypt");
const SendEmail = require("../../utils/emails/sendEmail");
const crypto = require("crypto");
const catchAsync = require("../../utils/catchAsync");
const { STATUS_CODE, ERRORS, SUCCESS_MSG } = require("../../constants/index");




const createOrder = catchAsync(async (req, res, next) => {
  try {
    let email = req.body.email;

    if (!email) {
      res
        .status(STATUS_CODE.BAD_REQUEST)
        .json({ message: "Email is required" });
      return;
    }

    const isExist = await OrderModel.findOne({ email });
    if (isExist) {
      res
        .status(STATUS_CODE.DUPLICATE)
        .json({ message: ERRORS.UNIQUE.ALREADY_EMAIL });
      return;
    }

    const newOrder = new OrderModel(request.body);
    await newOrder.save();

    await SendEmail(
      {
        email,
        subject: "Order Confirmation",
        code: "Thank you for Order!",
      },
      next
    );

    res
      .status(STATUS_CODE.OK)
      .json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.SUBSCRIPTION, isSubscription: newSubscription.isSubscription });
  } catch (err) {
    console.log(err);
    res
      .status(STATUS_CODE.SERVER_ERROR)
      .json({ message: ERRORS.PROGRAMMING.SOME_ERROR, err });
  }
});

const getAllOrders = catchAsync(async (req, res) => {
  try {
    const data = await OrderModel.find({ isSubscription: true });

    // const email = data.map((user) => user.email);
    const subscribedUsers = data.map((user) => ({
      email: user.email,
      userId: user._id
    }));

    res.status(STATUS_CODE.OK).json({ message: SUCCESS_MSG.SUCCESS_MESSAGES.OPERATION_SUCCESSFULL, subscribedUsers: subscribedUsers });
  } catch (err) {
    console.log(err);
    res.status(STATUS_CODE.BAD_REQUEST).json({ statusCode: STATUS_CODE.BAD_REQUEST, err })
  }
})


module.exports = { createOrder, getAllOrders };
