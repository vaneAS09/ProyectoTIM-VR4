import resultadosmodel from "../models/resultados.model.js"


//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllResultados = async (req, res) => {
    try {
        const resultados = await resultadosmodel.findAll({
            order: [
                ["num_documento", "ASC"],
                ["nombre_completo", "ASC"],
              ],
        })
        res.json(resultados)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getResultados = async (req, res) => {

        try {
            const resultado = await resultadosmodel.findAll({
                where: { codigo_test: req.params.codigo_test },
                order: [
                    ["num_documento", "ASC"],
                    ["nombre_completo", "ASC"],
                  ],
            
            })

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

//Crear un segundo registro

export const createResult = async (req, res) => {

    try {
        const { codigo_test } = req.body;
        const { num_documento } = req.body;

        resultadosmodel.findOne({ where: {codigo_test:codigo_test, num_documento:num_documento}}).then((resultado) => {
            console.log(resultado);
            if (!resultado) {
              return res.json({ mensaje: "No existe resultado" });
            }
            else {

                const {num_documento, nombre_completo, codigo_tes, grado, colegio, programa_pre1,programa_pre2,
                puntos_verbal, puntos_matematica, puntos_visual_espacial, puntos_naturalista, puntos_kinesico_corporal,
                puntos_ritmico_musical, puntos_interpersonal, puntos_intrapersonal} = resultado;
      
                    const data = {
                        num_documento, nombre_completo, codigo_tes, grado, colegio, programa_pre1,programa_pre2,
                        puntos_verbal, puntos_matematica, puntos_visual_espacial, puntos_naturalista, puntos_kinesico_corporal,
                        puntos_ritmico_musical, puntos_interpersonal, puntos_intrapersonal}

       resultadosmodel.create({
        num_documento:num_documento,
        nombre_completo: nombre_completo,
        codigo_test: codigo_test,
        grado: grado,
        colegio:colegio,
        programa_pre1:programa_pre2,
        programa_pre2:"",
        puntos_verbal:puntos_verbal,
        puntos_matematica:puntos_matematica,
        puntos_visual_espacial:puntos_visual_espacial,
        puntos_naturalista:puntos_naturalista,
        puntos_kinesico_corporal:puntos_kinesico_corporal,
        puntos_ritmico_musical:puntos_ritmico_musical,
        puntos_intrapersonal:puntos_intrapersonal,
        puntos_interpersonal:puntos_interpersonal

       });

       res.json({
        mensaje: "Nuevo resultado creado",

    });

    }});
            
    } catch (error) {
        res.json( {message: error.message} )
    } 
        
}

  

