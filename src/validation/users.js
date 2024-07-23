import createHttpError from 'http-errors';
import Joi from 'joi';

export const registerUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  password: Joi.string().min(6).max(30).required(),
  email: Joi.string().email(),
});

export const loginUserSchema = Joi.object({
  email: Joi.string().email(),
  password: Joi.string().min(3).max(30),
});
