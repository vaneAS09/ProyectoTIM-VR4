
import prospectomodel from "../models/prospecto.model.js";


//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllprospect = async (req, res) => {
    try {
        const prospectos = await prospectomodel.findAll()
        res.json(prospectos)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getprospect = async (req, res) => {
        try {
            const prospecto = await prospectomodel.findAll({
                where:{ id:req.params.id }
            })
            res.json(prospecto[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}

//Crear un registro de prospectos y evaluación

export const createProspect = async (req, res) => {

    try {
       const {tipo_documento, num_documento, nombres, apellidos, grado, Ciudad_residencia,email, telefono, datos_auth} = req.body;
       prospectomodel.create({

        tipo_documento:tipo_documento,
        num_documento:num_documento,
        nombres:nombres,
        apellidos:apellidos,
        grado:grado,
        Ciudad_residencia:Ciudad_residencia,
        email:email,
        telefono:telefono,
        datos_auth:datos_auth
       });

     res.json("Registro creado de manera exitosa");
    } catch (error) {
        res.json( {message: error.message} )
    }

}


//Actualizar un registro
export const updateProspect = async (req, res) => {
    try {
            await prospectomodel.update(req.body, {
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
export const deleteProspect = async (req, res) => {
    try {
        await prospectomodel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

//Validar acceso por documento de identidad

export const validateProspect = async (req, res) => {

    const { num_documento } = req.body;

    // Validar si el documento de identidad existe
  
    prospectomodel.findOne({ where: {num_documento:num_documento} }).then((prospecto) => {
      console.log(prospecto);
      if (!prospecto) {
        return res.json({ mensaje: "Prospecto no encontrado" });
      }
      else {
        const { id, nombres, apellidos, grado, Ciudad_residencia, email, telefono } = prospecto;
        const data = {
            id,
            nombres,
            apellidos,
            grado,
            Ciudad_residencia,
            email,
            telefono

          };

          res.json({
            mensaje: "Prospecto inició correctamente",
            prospecto: {
                id,
                num_documento,
                nombres,
                apellidos,
                grado,
                Ciudad_residencia,
                email,
                telefono
            },
          });

        }
    
    });
  };


