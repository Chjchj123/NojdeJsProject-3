import { StatusCodes } from 'http-status-codes'
import { boardService } from '~/services/boardService.js'

const createNew = async (req, res, next) => {
    try {
        const newBoard = await boardService.createService(req.body)
        res.status(StatusCodes.CREATED).json(newBoard)
    } catch (error) {
        next(error)
    }
}

export const boardController = {
    createNew
}
