import express from 'express'
import { getAllTest, getTest, createTest, updateTest, deleteTest, validateTest } from '../controllers/test.controller.js'


const routerTest = express.Router()

routerTest.get('/', getAllTest)
routerTest.get('/:id', getTest)
routerTest.post('/', createTest)
routerTest.put('/:id', updateTest)
routerTest.delete('/:id', deleteTest)
routerTest.post('/validate', validateTest)

export default routerTest