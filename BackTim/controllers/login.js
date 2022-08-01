import bcrypt from 'bcrypt';
import usermodel from "../models/user.model.js";
import  jwt from "jsonwebtoken";


//Login usuario

export const login = async (req, res) => {

    const { email, pass } = req.body;
   // console.log(pEmail, pass);

    // Validar si el usuario existe
  
    usermodel.findOne({ where: {email:email} }).then((usuario) => {
      console.log(usuario);
      if (!usuario) {
        return res.json({ mensaje: "Usuario no encontrado" });
      }
      
        //Comparar la contraseña ingresada con la base de datos

      bcrypt.compare(pass, usuario.pass).then((Contraseña) => {
        if (Contraseña) {
          const { id, name } = usuario;
  
          const data = {
            id,
            name,
          };
  
          const token = jwt.sign(data, "secreto", {
            expiresIn: 86400 /* 24hs */,
          });
  
          res.json({
            mensaje: "Usuario logeado correctamente",
            usuario: {
              id,
              name,
              token,
              email
            },
          });
        } else {
          return res.json({ mensaje: "Contraseña incorrecta" });
        }
      });
    });
  };

  //Cerrar sesión

export const logoutUser = async (req, res) => {
  try {

      const userlog = {
          userlog: req.params.user
      };

      const emptyToken = {
          token: ""
      };
      const user = await usermodel.findOneAndUpdate(userlog, emptyToken);
      res.send({
          mensaje: `Goodbye ${user.name}!`
      });
  } catch (error) {
      console.error(error);
      res.status(500).send({
          error,
          mensaje: 'Error al intentar desconectar el usuario'
      })
  }
}
