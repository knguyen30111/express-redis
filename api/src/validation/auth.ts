import Joi from '@hapi/joi'
import { BCRYPT_MAX_BYTES } from '../config'

const email = Joi.string().min(8).max(254).lowercase().trim().required()

const name = Joi.string().min(3).max(128).trim().required()

const password = Joi.string().min(8).max(BCRYPT_MAX_BYTES, 'utf8')
              .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/)
              .message('"{#label}" must contain one uppercase letter, one lowercase letter, and one digit')
              .required()


const passwordConfirmation = Joi.valid(Joi.ref('password')).required()

export const registerSchema = Joi.object({
  email, 
  name,
  password,
  passwordConfirmation,
})
