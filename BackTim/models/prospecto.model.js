//importamos la conexión a la DB
import db from "../config/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const prospectomodel = db.define('prospectos', {
    tipo_documento: { type: DataTypes.STRING, required: true, min: 2, max: 2 },
    num_documento: { type: DataTypes.STRING, required: true },
    nombres: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    apellidos: { type: DataTypes.STRING, required: true, min: 6, max: 1024 },
    grado: { type: DataTypes.STRING, required: true, min: 3, max: 255 },
    Ciudad_residencia: { type: DataTypes.STRING, required: true, min: 3, max: 255 },
    email: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    telefono: { type: DataTypes.STRING, required: true, min: 6, max: 1024 },
    datos_auth: { type: DataTypes.STRING, required: true },
 })

 export default prospectomodel;