const joi = require("joi");
const authService = require("../services/authService");

const loginSchema = joi.object().keys({
  email: joi.string().required(),
  password: joi.string().min(6).max(18).required(),
});

const resetPasswordSchema = joi.object().keys({
  email: joi.string().required(),
  password: joi.string().min(6).max(18).required(),
});

module.exports = {
  login: async (req, res) => {
    try {
      const validate = await loginSchema.validateAsync(req.body);
      const login = await authService.login(validate);

      if (login.error) {
        return res.send({
          error: login.error,
        });
      }

      res.cookie("auth", login.response.token, {
        maxAge: 30000,
      });
      return res.send({
        response: login.response,
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie("auth", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
      return res.send({
        message: "Logged out successfully",
      });
    } catch (error) {
      return res.send({
        message: error.message,
      });
    }
  },

  resetPassword: async (req, res) => {
    try {
      const validate = await resetPasswordSchema.validateAsync(req.body);
      const user = await authService.resetPassword(validate);
      console.log("user:", user);

      if (user.error) {
        return res.send({
          error: user.error,
        });
      }

      return res.send({
        response: user.response,
      });
    } catch (error) {
      console.log("Error from Controll:", error);
      return res.send({
        error: error,
      });
    }
  },
};
