const database = require("../database");

class Organization {
  constructor() {
    this.model = database.db.define("organizations", {
      id: {
        primaryKey:true,
        type: database.db.Sequelize.type.INTEGER,
        autoIncrement:true
      },
      name: {
        type: database.db.Sequelize.type.STRING,
        allowNull:false,

      },
      address: {
        type: database.db.Sequelize.type.STRING,
        allowNull:false,
      },
      phone: {
        type: database.db.Sequelize.type.STRING,
        allowNull:true,
      },
      email: {
        type: database.db.Sequelize.type.STRING,
        allowNull:false,
        unique:true
      },
    });
  }
}

module.exports = new Organization().model;