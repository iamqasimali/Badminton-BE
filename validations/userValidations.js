const Joi = require('joi');

module.exports = {
  createUserSchema: () => {
    return Joi.object().keys({
      email: Joi.string().email().required().messages({
        "string.email": "Email must be a valid email",
        "any.required": "Email is required",
      }),
      password: Joi.string().required().messages({
        "any.required": "Password is required",
      }),
      name: Joi.string().required().messages({
        "any.required": "Name is required",
      }),
      realName: Joi.string().min(3).max(100).required().messages({
        "string.min": "Real name must be at least 3 characters",
        "string.max": "Real name must be less than 100 characters",
        "any.required": "Real name is required",
      }),
      petName: Joi.string().min(3).max(100).required().messages({
        "string.min": "Pet name must be at least 3 characters",
        "string.max": "Pet name must be less than 100 characters",
        "any.required": "Pet name is required",
      }),
      telephoneNumber: Joi.string().min(7).max(40).required().messages({
        "string.min": "Telephone number must be at least 7 characters",
        "string.max": "Telephone number must be less than 40 characters",
        "any.required": "Telephone number is required",
      }),
      city: Joi.string().required().messages({
        "any.required": "City is required",
      }),
      dateOfBirth: Joi.date().required().messages({
        "any.required": "Date of birth is required",
      }),
      myRacket: Joi.boolean().required().messages({
        "any.required": "My racket is required",
      }),
      yearsOfExperience: Joi.number().integer().min(1).required().messages({
        "number.base": "Years of experience must be a number",
        "number.integer": "Years of experience must be an integer",
        "number.min": "Years of experience must be at least 1",
        "any.required": "Years of experience is required",
      }),
    });
  }
};
