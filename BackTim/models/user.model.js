//importamos la conexión a la DB
import db from "../config/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";


 const usermodel = db.define('users', {
    documentType: { type: DataTypes.STRING, required: true, min: 2, max: 2 },
    Document: { type: DataTypes.STRING, required: true},
    user: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    email: { type: DataTypes.STRING, required: true, min: 6, max: 1024 },
    name: { type: DataTypes.STRING, required: true, min: 3, max: 255 },
    lastName: { type: DataTypes.STRING, required: true, min: 3, max: 255 },
    rol: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    pass: { type: DataTypes.STRING, required: true, min: 6 },
    Title: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    titleArea: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
 })

 export default usermodel;