//importamos la conexión a la DB
import db from "../config/db.js";
//importamos sequelize
import { DataTypes } from "sequelize";

 const resultadosmodel = db.define('resultados', {

    num_documento:{ type: DataTypes.STRING, required: true },
    nombre_completo: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    codigo_test: { type: DataTypes.STRING, required: true, min: 6, max: 1024 },
    grado: { type: DataTypes.STRING, required: true, min: 3, max: 255 },
    colegio: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    programa_pre1: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    programa_pre2: { type: DataTypes.STRING, required: true, min: 6, max: 255 },
    puntos_verbal: { type: DataTypes.INTEGER, required: true },
    puntos_matematica: { type: DataTypes.INTEGER, required: true },
    puntos_visual_espacial: {type: DataTypes.INTEGER, required: true},
    puntos_naturalista: {type: DataTypes.INTEGER, required: true},
    puntos_kinesico_corporal: {type: DataTypes.INTEGER, required: true},
    puntos_ritmico_musical: {type: DataTypes.INTEGER, required: true},
    puntos_intrapersonal: {type: DataTypes.INTEGER, required: true},
    puntos_interpersonal: {type: DataTypes.INTEGER, required: true},
 
 })

 export default resultadosmodel;