import express from 'express'
import { getAllEvaluaciones, getEvaluaciones, deleteEvaluaciones, 
    validateProspect, createProsEva, updateEvaluacion, updateEvaluaciones, ValidateRecuperar } from '../controllers/evaluaciones.controller.js'

const routerEvaluaciones = express.Router()

routerEvaluaciones.get('/', getAllEvaluaciones)
routerEvaluaciones.get('/:id', getEvaluaciones)
routerEvaluaciones.delete('/:id', deleteEvaluaciones)
routerEvaluaciones.post('/validate', validateProspect)
routerEvaluaciones.post('/validateR', ValidateRecuperar )
routerEvaluaciones.post('/',createProsEva)
routerEvaluaciones.put('/:id', updateEvaluacion)
routerEvaluaciones.put('/', updateEvaluaciones)

export default routerEvaluaciones