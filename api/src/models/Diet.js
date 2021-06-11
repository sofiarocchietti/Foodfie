const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
   sequelize.define('diet', {
    id: { 
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },  
     name: {
      type: DataTypes.STRING,
      unique: true 
    }
  });  
};