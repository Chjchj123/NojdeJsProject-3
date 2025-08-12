/* eslint-disable no-useless-catch */

const slugtify = require('slugify')

const createService = async (req) => {
    try {
        const newBoard = {
            ...req,
            slug: slugtify(req.title)
        }

        return newBoard
    } catch (error) {
        throw error
    }
}

export const boardService = {
    createService
}