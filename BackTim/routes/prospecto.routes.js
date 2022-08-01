import express from 'express'
import { getAllprospect, getprospect, createProspect,  updateProspect, deleteProspect, validateProspect} from '../controllers/prospecto.controller.js'

const routerProspect = express.Router()

routerProspect.get('/', getAllprospect)
routerProspect.get('/:id', getprospect)
routerProspect.post('/', createProspect)
routerProspect.put('/:id', updateProspect)
routerProspect.delete('/:id', deleteProspect)
routerProspect.post('/validate', validateProspect)

export default routerProspect