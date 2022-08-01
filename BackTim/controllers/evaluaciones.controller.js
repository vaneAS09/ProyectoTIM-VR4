import evaluacionesmodel from "../models/Evaluaciones.model.js";
import prospectomodel from "../models/prospecto.model.js";
import testmodel from "../models/test.model.js"
import resultadosmodel from "../models/resultados.model.js"
import  verifyCod from "jsonwebtoken";


//** Métodos para el CRUD **/

//Mostrar todos los registros
export const getAllEvaluaciones = async (req, res) => {
    try {
        const evaluaciones = await evaluacionesmodel.findAll()
        res.json(evaluaciones)
    } catch (error) {
        res.json( {message: error.message} )
    }
}
//Mostrar un registro
export const getEvaluaciones = async (req, res) => {
        try {
            const evaluacion = await evaluacionesmodel.findAll({
                where:{ id:req.params.id }
            })
            res.json(evaluacion[0])
        } catch (error) {
            res.json( {message: error.message} )
        }
}

//Actualizar una evaluación

export const updateEvaluacion = async (req, res) => {
    try {
            await evaluacionesmodel.update(req.body, {
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
export const deleteEvaluaciones = async (req, res) => {
    try {
        await evaluacionesmodel.destroy({ 
            where: { id : req.params.id }
        })
        res.json({
            "message":"¡Registro eliminado correctamente!"
        })
    } catch (error) {
        res.json( {message: error.message} )
    }
}

// Crear una evaluación cuando se crea un prospecto si código único del test existe

export const createProsEva = async (req, res) => {

    try {
        const { codigo_unico } = req.body;
        const { num_documento } = req.body;

        testmodel.findOne({ where: {codigo_unico:codigo_unico, estado:"Abierto"} }).then((test) => {
            console.log(test);
            if (!test) {
              return res.json({ mensaje: "El Test se encuentra cerrado o no existe" });
            }
            else {

        const { codigo_unico, colegio} = test;
        const data = {
           codigo_unico,
           colegio
          };

        prospectomodel.findOne({ where: {num_documento:num_documento} }).then((prospecto) => {
            console.log(prospecto);
            if (prospecto) {
              return res.json({ mensaje: "El prospecto ya existe" });
            }
            else {

       const {tipo_documento, num_documento, nombres, apellidos, grado, Ciudad_residencia,email, 
        telefono, datos_auth, programa1, programa2} = req.body;
       prospectomodel.create({

        tipo_documento:tipo_documento,
        num_documento:num_documento,
        nombres:nombres,
        apellidos:apellidos,
        grado:grado,
        Ciudad_residencia:Ciudad_residencia,
        email:email,
        telefono:telefono,
        datos_auth:datos_auth,
        programa1:programa1,
        programa2:programa2
       });

       const {pregunta =0, estado="abierto"} = req.body;
       evaluacionesmodel.create({
        documento:num_documento,
        nombres:nombres,
        apellidos:apellidos,
        grado:grado,
        ciudad:Ciudad_residencia,
        email:email,
        programa1:programa1,
        programa2:programa2,
        codigo_unico:codigo_unico,
        colegio:colegio,
        pregunta1:pregunta, pregunta2:pregunta,pregunta3:pregunta, pregunta4:pregunta, pregunta5:pregunta,
        pregunta6:pregunta, pregunta7:pregunta,pregunta8:pregunta, pregunta9:pregunta, pregunta10:pregunta,
        pregunta11:pregunta, pregunta12:pregunta,pregunta13:pregunta, pregunta14:pregunta, pregunta15:pregunta,
        pregunta16:pregunta, pregunta17:pregunta,pregunta18:pregunta, pregunta19:pregunta, pregunta20:pregunta,
        pregunta21:pregunta, pregunta22:pregunta,pregunta23:pregunta, pregunta24:pregunta, pregunta25:pregunta,
        pregunta26:pregunta, pregunta27:pregunta,pregunta28:pregunta, pregunta29:pregunta, pregunta30:pregunta,
        pregunta31:pregunta, pregunta32:pregunta,pregunta33:pregunta, pregunta34:pregunta, pregunta35:pregunta,
        pregunta36:pregunta, pregunta37:pregunta,pregunta38:pregunta, pregunta39:pregunta, pregunta40:pregunta,
        estado:estado
       });

       const {puntosInt=0} = req.body;
       resultadosmodel.create({
        num_documento:num_documento,
        nombre_completo: nombres +  " " + apellidos,
        codigo_test: codigo_unico,
        grado: grado,
        colegio:colegio,
        programa_pre1:programa1,
        programa_pre2:programa2,
        puntos_verbal:puntosInt,
        puntos_matematica:puntosInt,
        puntos_visual_espacial:puntosInt,
        puntos_naturalista:puntosInt,
        puntos_kinesico_corporal:puntosInt,
        puntos_ritmico_musical:puntosInt,
        puntos_intrapersonal:puntosInt,
        puntos_interpersonal:puntosInt

       });

       res.json({
        mensaje: "Test habilitado",
        test: {
          codigo_unico,
          colegio,
        },
        prospecto: {
            num_documento
        }

    });
    

    }});
    
    }


        });
            
    } catch (error) {
        res.json( {message: error.message} )
    } 
        
}

//crear una evaluación si un prospecto existe y un códido unico de evaluación existe

export const validateProspect = async (req, res) => {


    const { codigo_unico } = req.body;
    const {programa1, programa2} = req.body;
    const { num_documento } = req.body;

    testmodel.findOne({ where: {codigo_unico:codigo_unico, estado:"Abierto"} }).then((test) => {
        console.log(test);
        if (!test) {
          return res.json({ mensaje: "El Test se encuentra cerrado o no existe" });
        }

        else {

    const { codigo_unico, colegio} = test;


      // Validar si el documento de identidad existe
    
      prospectomodel.findOne({ where: {num_documento:num_documento} }).then((prospecto) => {
        console.log(prospecto);
        if (!prospecto) {
          return res.json({ mensaje: "Prospecto no encontrado" });
        }
        else {
          const { num_documento, nombres, apellidos, grado, Ciudad_residencia, email} = prospecto;
          const data = {
            nombres,
            num_documento,
            apellidos,
            grado,
            Ciudad_residencia,
            email,

          };


            evaluacionesmodel.findOne({ where: {documento:num_documento, codigo_unico:codigo_unico} }).then((Yapresento) => {
                console.log(Yapresento);

                 if (Yapresento){

                    return res.json({ mensaje: "Ya has presentado este test" });
                    
                 }
                            
                else {
                    
                    const {pregunta =0,  estado="abierto"} = req.body;
                        evaluacionesmodel.create({
                            documento:num_documento,
                            nombres:nombres,
                            apellidos:apellidos,
                            grado:grado,
                            ciudad:Ciudad_residencia,
                            email:email,
                            programa1:programa1,
                            programa2:programa2,
                            codigo_unico:codigo_unico,
                            colegio:colegio,
                            pregunta1:pregunta, pregunta2:pregunta,pregunta3:pregunta, pregunta4:pregunta, pregunta5:pregunta,
                            pregunta6:pregunta, pregunta7:pregunta,pregunta8:pregunta, pregunta9:pregunta, pregunta10:pregunta,
                            pregunta11:pregunta, pregunta12:pregunta,pregunta13:pregunta, pregunta14:pregunta, pregunta15:pregunta,
                            pregunta16:pregunta, pregunta17:pregunta,pregunta18:pregunta, pregunta19:pregunta, pregunta20:pregunta,
                            pregunta21:pregunta, pregunta22:pregunta,pregunta23:pregunta, pregunta24:pregunta, pregunta25:pregunta,
                            pregunta26:pregunta, pregunta27:pregunta,pregunta28:pregunta, pregunta29:pregunta, pregunta30:pregunta,
                            pregunta31:pregunta, pregunta32:pregunta,pregunta33:pregunta, pregunta34:pregunta, pregunta35:pregunta,
                            pregunta36:pregunta, pregunta37:pregunta,pregunta38:pregunta, pregunta39:pregunta, pregunta40:pregunta,
                            estado:estado
                        });

                    const {puntosInt=0} = req.body;
                    resultadosmodel.create({
                        num_documento:num_documento,
                        nombre_completo: nombres +  " " + apellidos,
                        codigo_test: codigo_unico,
                        grado: grado,
                        colegio:colegio,
                        programa_pre1:programa1,
                        programa_pre2:programa2,
                        puntos_verbal:puntosInt,
                        puntos_matematica:puntosInt,
                        puntos_visual_espacial:puntosInt,
                        puntos_naturalista:puntosInt,
                        puntos_kinesico_corporal:puntosInt,
                        puntos_ritmico_musical:puntosInt,
                        puntos_intrapersonal:puntosInt,
                        puntos_interpersonal:puntosInt

                    });

                    res.json({
                        mensaje: "Test habilitado",
                        test: {
                          codigo_unico,
                          colegio,
                        },
                        prospecto: {
                            num_documento
                        },
                        Yapresento: {
                            codigo_unico,
                            num_documento
                        }
            
                    });

                } 
                
      
                 });


            }});

                }});
    
  };


//Actualización formulario 1

// Función para recuperar un test

export const ValidateRecuperar = async (req, res) =>{

    const { codigo_unico } = req.body;
    const { documento } = req.body;

    evaluacionesmodel.findOne({ where: {documento:documento, codigo_unico:codigo_unico, estado:"abierto"} }).then((evaluacion) => {
        console.log(evaluacion);

        if (!evaluacion) {
          return res.json({ mensaje: "Evaluación no encontrada o ya presentada" });
        }
        else {
            const { codigo_unico, documento, estado} = evaluacion;
            res.json({
                mensaje: "Test habilitado",
                evaluacion: {
                  codigo_unico,
                  documento,
                  estado
                }});

        }

    });

}

//Actualizar un registro
export const updateEvaluaciones = async (req, res) => {
    try {

        const { codigo_unico } = req.body;
        const { documento } = req.body;

      await evaluacionesmodel.update(req.body, {
        where: { documento:documento, codigo_unico:codigo_unico, estado:"abierto"}
          })

          
          evaluacionesmodel.findOne({ where: {documento:documento, codigo_unico:codigo_unico, estado:"abierto"} }).then((evaluacion) => {
            console.log(evaluacion);
            if (!evaluacion) {
              return res.json({ mensaje: "Eva no encontrada o ya presentada" });
            }
            else {
              const {pregunta1 , pregunta2 , pregunta3 , pregunta4 , pregunta5,
              pregunta6 , pregunta7 , pregunta8 , pregunta9 , pregunta10,
              pregunta11 , pregunta12 , pregunta13 , pregunta14 , pregunta15,
              pregunta16 , pregunta17 , pregunta18 , pregunta19 , pregunta20,
              pregunta21 , pregunta22 , pregunta23 , pregunta24 , pregunta25,
              pregunta26 , pregunta27 , pregunta28 , pregunta29 , pregunta30,
              pregunta31 , pregunta32 , pregunta33 , pregunta34 , pregunta35,
              pregunta36 , pregunta37 , pregunta38 , pregunta39 , pregunta40 } = evaluacion;

              const data = {
                pregunta1 , pregunta2 , pregunta3 , pregunta4 , pregunta5,
                pregunta6 , pregunta7 , pregunta8 , pregunta9 , pregunta10,
                pregunta11 , pregunta12 , pregunta13 , pregunta14 , pregunta15,
                pregunta16 , pregunta17 , pregunta18 , pregunta19 , pregunta20,
                pregunta21 , pregunta22 , pregunta23 , pregunta24 , pregunta25,
                pregunta26 , pregunta27 , pregunta28 , pregunta29 , pregunta30,
                pregunta31 , pregunta32 , pregunta33 , pregunta34 , pregunta35,
                pregunta36 , pregunta37 , pregunta38 , pregunta39 , pregunta40}

                function sumar(a, b, c, d, e) {
                     return a + b + c + d + e;}

      const intVerbal = sumar(Number(pregunta1) , Number(pregunta2) , Number(pregunta3) , Number(pregunta4) , Number(pregunta5));
      const intMate = sumar(Number(pregunta6) , Number(pregunta7) , Number(pregunta8) , Number(pregunta9) , Number(pregunta10));
      const intEspacial = sumar(Number(pregunta11) , Number(pregunta12) , Number(pregunta13) , Number(pregunta14) , Number(pregunta15));
      const intNaturalista = sumar( Number(pregunta16) , Number(pregunta17) , Number(pregunta18) , Number(pregunta19) , Number(pregunta20));
      const intkinesico = sumar(Number(pregunta21) , Number(pregunta22) , Number(pregunta23) , Number(pregunta24) , Number(pregunta25));
      const intMusical = sumar(Number(pregunta26) , Number(pregunta27) , Number(pregunta28) , Number(pregunta29) , Number(pregunta30));
      const intIntra = sumar(Number(pregunta31) , Number(pregunta32) , Number(pregunta33) , Number(pregunta34) , Number(pregunta35));
      const intInter = sumar(Number(pregunta36) , Number(pregunta37) , Number(pregunta38) , Number(pregunta39) , Number(pregunta40));
 

        const updatedRows = resultadosmodel.update(
            {
        puntos_verbal:intVerbal,
        puntos_matematica:intMate,
        puntos_visual_espacial:intEspacial,
        puntos_naturalista:intNaturalista,
        puntos_kinesico_corporal:intkinesico,
        puntos_ritmico_musical:intMusical,
        puntos_intrapersonal:intIntra,
        puntos_interpersonal:intInter
        },
        {
        where: {num_documento:documento, codigo_test:codigo_unico } 
        }
       );
       console.log(updatedRows);

        res.json({
            "message":"¡Registro actualizado correctamente!"
        }) 


                        }})
    
    } catch (error) {
        res.json( {message: error.message} )
    }
}
