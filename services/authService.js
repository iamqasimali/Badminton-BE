require("dotenv").config();
const userModel = require("../models/userModel");
const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");

module.exports = {
  login: async (body) => {
    try {
      const isUser = await userModel.findByEmail(body.email);
      if (isUser.error || !isUser.response) {
        return {
          error: {
            error: isUser?.error || isUser.response,
            message: "User Not Found!",
          },
        };
      }

      const isValid = await compare(
        body.password,
        isUser.response.dataValues.password
      );

      if (!isValid) {
        return {
          response: {
            token: "undefined",
            message: "invalid credentials",
          },
        };
      }

      delete isUser.response.dataValues.password;
      const token = sign(isUser.response.dataValues, process.env.SECRET, {
        expiresIn: 30,
      });

      return {
        response: {
          token: token,
          message: "loggen in successfully!",
        },
      };
    } catch (error) {
      return {
        error: error,
      };
    }
  },

  resetPassword: async (body) => {
    try {
      const updateUserPassword = await userModel.resetPassword(body);
      console.log(updateUserPassword.response[0]);
      if (updateUserPassword.error || !updateUserPassword.response[0]) {
        return {
          error: {
            message: "Error in update!",
            error: updateUserPassword?.error || updateUserPassword.response,
          },
        };
      }

      return {
        response: {
          message: "Password is update!",
          response: updateUserPassword.response,
        },
      };
    } catch (error) {
      console.log("Error from Service:", error);
      return { error: error };
    }
  },
};
