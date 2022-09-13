import resultadosmodel from "../models/resultados.model.js"


//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllResultados = async (req, res) => {
    try {
        const resultados = await resultadosmodel.findAll()
        res.json(resultados)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getResultados = async (req, res) => {

        try {
            const resultado = await resultadosmodel.findAll({
                where: { codigo_test: req.params.codigo_test }})

                res.json(resultado)

        } catch (error) {
            res.json( {message: error.message} )
            console.log(codigo_test)
        }
}

//Eliminar un registro
export const deleteResultados = async (req, res) => {
    try {
        await resultadosmodel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Actualizar un resultado

export const updateResultado = async (req, res) => {
    try {
            await resultadosmodel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}
  


  

