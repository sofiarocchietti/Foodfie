const { DataTypes } = require('sequelize');
/* const { Recipe, Diet } = require('../db');  */
 /* const { v4: uuidv4 } = require('uuid');
console.log(uuidv4())  */

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
/* Receta con las siguientes propiedades:
ID: *
Nombre *
Resumen del plato *
Puntuación
Nivel de "comida saludable"
Paso a paso */

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', { //Los modelos ya estan hechos crack 
    title: {
      type: DataTypes.STRING, 
      allowNull: false,
    },
    id: { 
      type: DataTypes.UUID,
      primaryKey: true, 
      defaultValue: DataTypes.UUIDV4
    },  
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    spoonacularScore: {
      type: DataTypes.INTEGER
    },
    healthScore: {
      type: DataTypes.INTEGER
    },
    analyzedInstructions: {
      type: DataTypes.ARRAY(DataTypes.TEXT)
    }, 
    image : {
      type: DataTypes.STRING
    } 
  });

};
