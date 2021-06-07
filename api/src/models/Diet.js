const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  // defino el modelo
   sequelize.define('diet', {
    id: { 
      type: DataTypes.INTEGER,
      primaryKey: true
    },  
     name: {
      type: DataTypes.STRING
    }
  });  
};