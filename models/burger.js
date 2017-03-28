module.exports = function(sequelize, DataTypes){
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      len: [1]
    }, 
    devoured: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
      
  },
  {
    // don't use camelcase for automatically added attributes but underscore style
    underscored: true,
    // disable the modification of table names
    freezeTableName: true
  });
  return Burger;
};