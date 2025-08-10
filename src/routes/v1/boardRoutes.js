import express from 'express';
const Router = express.Router();
const { StatusCodes } = require('http-status-codes');
const { boardValidation } = require('~/validations/boardValidation.js');

Router.route('/')
    .get((req, res) => {
        res.status(StatusCodes.OK).json({ message: 'APIs V1 request successful' });
    })
    .post(boardValidation.createNew)

export const BoardRoutes = Router