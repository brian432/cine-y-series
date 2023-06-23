import { type NextFunction, type Request, type Response } from 'express'
import { body, type ValidationChain, validationResult } from 'express-validator'

export type Validation = string[]

export const arrayValidation = (args: Validation): ValidationChain[] => {
  return [...args].map(prop => {
    if (prop === 'data') {
      return body(prop)
        .exists().withMessage('required field')
        .notEmpty().withMessage('should not be empty')
        .isObject().withMessage('must constain a object')
    }
    return body(prop)
      .exists().withMessage('required field')
      .notEmpty().withMessage('should not be empty')
      .isString().withMessage('must contain a string')
      .isLength({ min: 3 }).withMessage('must be at least 3 chars long')
  }
  )
}

export const validateProps = (array: Validation): any[] => {
  return [
    arrayValidation(array),
    (req: Request, res: Response, next: NextFunction) => {
      if (Object.keys(req.body).length > array.length) {
        res.status(400).send({
          status_code: 400,
          error: 'Extra field not required'
        })
        return
      }
      try {
        validationResult(req).throw()
        next()
      } catch (err: any) {
        res.status(400).send({
          status_code: 400,
          error: err.mapped()
        })
      }
    }
  ]
}

const arrayRegisterProperties: Validation = ['username', 'password']
const arrayLoginProperties: Validation = ['username', 'password']
const arrayFavsProperties: Validation = ['data', 'path']

export const validateRegister = validateProps(arrayRegisterProperties)
export const validateLogin = validateProps(arrayLoginProperties)
export const validateFavs = validateProps(arrayFavsProperties)

