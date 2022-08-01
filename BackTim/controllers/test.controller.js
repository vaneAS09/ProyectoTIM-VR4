import testmodel from "../models/test.model.js";


//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllTest = async (req, res) => {
    try {
        const test = await testmodel.findAll()
        res.json(test)
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Mostrar un registro
export const getTest = async (req, res) => {
        try {
            const test = await testmodel.findAll({
                where:{ id:req.params.id }
            })
            res.json(test[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}
//Crear un registro

export const createTest = async (req, res) => {

    try {

    const {codigo_unico, colegio, ciudad, estado } = req.body;

    // Validar si el código unico de text existe y está abierto
  
    testmodel.findOne({ where: {codigo_unico:codigo_unico} }).then((codigoU) => {
      console.log(codigoU);
      if (!codigoU) {
        return res.json({ mensaje: "El test se encuentra en estado cerrado o no existe" });
      }
      else {
         
            testmodel.create({
             codigo_unico:codigo_unico,
             colegio:colegio,
             ciudad:ciudad,
             estado:estado
          });
     
          res.json("Registro creado de manera exito");

          res.json({
            mensaje: "El test se encuentra habilitado",
            codigoU: {
                id,
                codigo_unico,
                colegio,
                ciudad,
                estado
            },

            
          });


        }
    });

    } catch (error) {
    res.json( {message: error.message} )
    }
};

//Actualizar un registro
export const updateTest = async (req, res) => {
    try {
   
            await testmodel.update(req.body, {
            where: { id: req.params.id}
        })
        res.json({
            "message":"¡Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Eliminar un registro
export const deleteTest = async (req, res) => {
    try {
        await testmodel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//validar código único

export const validateTest = async (req, res) => {

    const { codigo_unico } = req.body;

    // Validar si el código unico de text existe y está abierto
  
    testmodel.findOne({ where: {codigo_unico:codigo_unico, estado:"Abierto"} }).then((codigoU) => {
      console.log(codigoU);
      if (!codigoU) {
        return res.json({ mensaje: "El test se encuentra en estado cerrado o no existe" });
      }
      else {
        const { id, codigo_unico, colegio, ciudad, estado } = codigoU;
        const data = {
            id,
            codigo_unico,
            colegio,
            ciudad,
            estado
          };

          res.json({
            mensaje: "El test se encuentra habilitado",
            codigoU: {
                id,
                codigo_unico,
                colegio,
                ciudad,
                estado
            },
          });

        }
    
    });
  };


