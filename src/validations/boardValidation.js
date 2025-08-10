import Joi from 'joi'
import { StatusCodes } from 'http-status-codes'

const createNew = async (req, res, next) => {
    const correctCondition = Joi.object({
        title: Joi.string().min(2).max(50).required().trim().strict(),
        description: Joi.string().min(5).max(200).required().trim().strict()
    })

    try {
        console.log('Validating request body... ', req.body)
        await correctCondition.validateAsync(req.body)
        res.status(StatusCodes.CREATED).json({
            message: 'Board created successfully'
        })
    } catch (error) {
        res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
            errors: new Error(error).message
        })
    }
}

export const boardValidation = {
    createNew
}