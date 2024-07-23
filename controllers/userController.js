const userService = require("../services/userService");
const joi = require("joi");

const createUserSchema = joi.object().keys({
    email: joi.string().email().required().messages({
      "string.email": "Email must be a valid email",
      "any.required": "Email is required",
    }),
    password: joi.string().required().messages({
      "any.required": "Password is required",
    }),
    name: joi.string().required().messages({
      "any.required": "Name is required",
    }),
    realName: joi.string().min(3).max(100).required().messages({
      "string.min": "Real name must be at least 3 characters",
      "string.max": "Real name must be less than 100 characters",
      "any.required": "Real name is required",
    }),
    petName: joi.string().min(3).max(100).required().messages({
      "string.min": "Pet name must be at least 3 characters",
      "string.max": "Pet name must be less than 100 characters",
      "any.required": "Pet name is required",
    }),
    telephoneNumber: joi.string().min(7).max(40).required().messages({
      "string.min": "Telephone number must be at least 7 characters",
      "string.max": "Telephone number must be less than 40 characters",
      "any.required": "Telephone number is required",
    }),
    city: joi.string().required().messages({
      "any.required": "City is required",
    }),
    dateOfBirth: joi.date().required().messages({
      "any.required": "Date of birth is required",
    }),
    myRacket: joi.boolean().required().messages({
      "any.required": "My racket is required",
    }),
    yearsOfExperience: joi.number().integer().min(1).required().messages({
      "number.base": "Years of experience must be a number",
      "number.integer": "Years of experience must be an integer",
      "number.min": "Years of experience must be at least 1",
      "any.required": "Years of experience is required",
    }),
  });
  

module.exports = {
  createUser: async (req, res) => {
    try {
        const validate = await createUserSchema.validateAsync(req.body);
        const user = await userService.createUser(validate);
  
        if (user.error) {
          return res.send({
            error: user.error,
          });
        }
  
        return res.send({
          response: user.response,
        });
      } catch (error) {
        return res.send({
          error: error,
        });
      }
  },
};
