import express from 'express'
import { BoardRoutes } from '~/routes/v1/boardRoutes.js'
const Router = express.Router()

Router.use('/boards', BoardRoutes)

export const V1Routes = Router