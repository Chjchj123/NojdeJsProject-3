/* eslint-disable no-useless-catch */

const slugtify = require('slugify')
const { boardModel } = require('../models/boardModel.js')

const createService = async (req) => {
    try {
        const newBoard = {
            ...req,
            slug: slugtify(req.title)
        }

        const createdBoard = await boardModel.createNew(newBoard)
        console.log('Create new board successfully:', createdBoard)
        const getId = await boardModel.findOneById(createdBoard.insertedId)
        return getId
    } catch (error) {
        throw error
    }
}

export const boardService = {
    createService
}