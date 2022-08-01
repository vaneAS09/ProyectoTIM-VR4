//importamos la conexión a la DB
import db from "../config/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";


 const testmodel = db.define('test', {
    codigo_unico: { type: DataTypes.STRING, required: true, min: 2, max: 255 },
    colegio: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    ciudad: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    estado: { type: DataTypes.STRING, required: true, min: 6, max: 1024 }
 })

 export default testmodel;